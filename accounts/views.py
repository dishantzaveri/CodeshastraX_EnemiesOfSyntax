from nturl2path import url2pathname
from xml.dom import UserDataHandler
from django.shortcuts import render

from django.contrib.auth import authenticate,login

from rest_framework.authtoken.models import Token
from rest_framework import status,permissions,viewsets

from testapp import custom_permissions

from .models import *
from .serializers import *

from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.decorators import action,api_view
from rest_framework import generics
from .recommendation import Myrecommend
from django.contrib.auth import get_user_model
from django.db.models import Case, When
import requests, datetime
from hackethon import settings
import numpy as np 
import pandas as pd
from rest_framework import status,permissions
from django.db.models import F, ExpressionWrapper, Q

User = get_user_model()

# Create your views here.
class MentorRegisterAPI(GenericAPIView):
	
	serializer_class = MentorRegisterSerializer
	
	def post(self,request,*args,**kwargs):
		data = request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception = True)
		user = serializer.save()
		if not user.is_active:
			user.is_active = True
			user.save()
		token = Token.objects.create(user=user)
		
		return Response({'token' : token.key,'email' : user.email, 'name' : user.name},status = status.HTTP_200_OK)


class LoginAPI(GenericAPIView):
	permission_classes=[permissions.AllowAny]
	serializer_class = LoginSerializer
	
	def post(self,request,*args,**kwargs ):
		email = request.data.get('email',None)
		password = request.data.get('password',None)
		user = authenticate(email = email, password = password)
		if user :
			login(request,user)
			serializer = self.serializer_class(user)
			token = Token.objects.get(user=user)
			return Response({'token' : token.key,'email' : user.email,'name' : user.name, 'is_entrepreneur': user.is_entrepreneur, 'is_mentor': user.is_mentor},status = status.HTTP_200_OK)
		return Response('Invalid Credentials',status = status.HTTP_404_NOT_FOUND)

class StartupDetails(viewsets.ModelViewSet):
	queryset = Startup.objects.all()
	serializer_class = StartupSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Startup.objects.filter(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class StartupsList(GenericAPIView):
	serializer_class = StartupSerializer

	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

	def get(self,request):
		startups = Startup.objects.all()
		serializer = StartupSerializer(startups, many=True)
		return Response(serializer.data)

class WorkExperienceDetails(viewsets.ModelViewSet):
	queryset = WorkExperience.objects.all()
	serializer_class = WorkExperienceSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return WorkExperience.objects.filter(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class EducationDetails(viewsets.ModelViewSet):
	queryset = Education.objects.all()
	serializer_class = EducationSerializer
	permission_classes = [permissions.IsAuthenticated]

	def get_queryset(self):
		return Education.objects.filter(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class MentorProfileViewSet(viewsets.ModelViewSet):
	queryset = MentorProfile.objects.all()
	serializer_class = MentorProfileSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]

	def get_queryset(self):
		return MentorProfile.objects.filter(user=self.request.user)
	
	def perform_create(self,serializer):
		serializer.save(user = self.request.user)
	
	def update(self, request, *args, **kwargs):
		kwargs['partial'] = True
		return super().update(request, *args, **kwargs)

class MentorsList(GenericAPIView):
	serializer_class = MentorProfileSerializer

	permission_classes = [permissions.IsAuthenticated]

	def get(self,request):
		mentors = MentorProfile.objects.all()
		serializer = MentorProfileSerializer(mentors, many=True)
		return Response(serializer.data)

class MentorsLocationList(GenericAPIView):
	serializer_class = MentorLocationSerializer

	permission_classes = [permissions.AllowAny]

	def get(self,request):
		mentors = MentorProfile.objects.all()
		serializer = MentorLocationSerializer(mentors, many=True)
		return Response(serializer.data)

class ConnectMenteeView(GenericAPIView):
	queryset = Mentorship.objects.all()
	serializer_class = MentorshipSerializer
	permission_classes = [custom_permissions.IsMentorOrReadOnly]

	def get(self):
		return Mentorship.objects.filter(mentor = self.request.user)
	
	def post(self,serializer):
		data = self.request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save(mentor = self.request.user, is_active=True)
		obj, created = Coins.objects.get_or_create(user=self.request.user,coins=49)
		if not created:
			if obj.coins == 0:
				days_since_modified = (datetime.date.today() - obj.date_modified).days
				if days_since_modified > 30:
					obj.coins = 49
					obj.date_modified = datetime.date.today()
				else:
					days_left = 30 - days_since_modified
					return Response(f"You have exhausted your limit of 30 requests. You can send more requests after {days_left} days.")
			else:
				obj.coins = obj.coins - 1
				obj.save()
		return Response(serializer.data,status = status.HTTP_200_OK)
	
	def patch(self, request, pk, *args, **kwargs):
		try:
			mentorship = Mentorship.objects.get(pk=pk)
		except Mentorship.DoesNotExist:
			content = {'detail': 'No such mentorship exists'}
			return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
		serializer = MentorshipSerializer(instance = mentorship, data=request.data, partial = True)
		if serializer.is_valid():
			serializer.save()
		return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)

class ConnectMentorView(GenericAPIView):
	queryset = Mentorship.objects.all()
	serializer_class = MentorshipSerializer
	permission_classes = [custom_permissions.IsEntrepreneurOrReadOnly]

	def get(self):
		return Mentorship.objects.all(mentor = self.request.user)
	
	def post(self,serializer):
		data = self.request.data
		serializer = self.serializer_class(data=data)
		serializer.is_valid(raise_exception=True)
		serializer.save(mentor = self.request.user, is_active=True)
		obj, created = Coins.objects.get_or_create(user=self.request.user,coins=29)
		if not created:
			if obj.coins == 0:
				days_since_modified = (datetime.date.today() - obj.date_modified).days
				if days_since_modified > 30:
					obj.coins = 29
					obj.date_modified = datetime.date.today()
				else:
					days_left = 30 - days_since_modified
					return Response(f"You have exhausted your limit of 30 requests. You can send more requests after {days_left} days.")
			else:
				obj.coins = obj.coins - 1
				obj.save()
		return Response(serializer.data,status = status.HTTP_200_OK)
	
	def patch(self, request, pk, *args, **kwargs):
		try:
			mentorship = Mentorship.objects.get(pk=pk)
		except Mentorship.DoesNotExist:
			content = {'detail': 'No such mentorship exists'}
			return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
		serializer = MentorshipSerializer(instance = mentorship, data=request.data, partial = True)
		if serializer.is_valid():
			serializer.save()
		return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)

class ProfileSearch(GenericAPIView):
	queryset = MentorProfile.objects.all()
	serializer_class = MentorProfileSerializer

	def post(self,request):
		expertise = request.POST.get('expertise')
		expertise_list = MentorProfile.objects.filter(expertise=expertise)
		print(expertise_list)
		serializer = MentorProfileSerializer(expertise_list, many=True)
		return Response(serializer.data)

class Rating(GenericAPIView):
	queryset = Myrating.objects.all()
	serializer_class = myrating_serializer
	
	def post(self,request):
		if not request.user.is_authenticated:
			return Response("login")
	#for rating
		mentor_email = request.POST.get('mentor_email')
		modelsof = Mentorship.objects.filter(entrepreneur = self.request.user,mentor = mentor_email)
		rate = request.POST.get('rating')
		mentor_profile = MentorProfile.objects.get(user = mentor_email)
		entrepreneur_profile = EntrepreneurProfile.objects.get(user = self.request.user)
		_mutable = request.data._mutable
		request.data._mutable = True
		request.data['mentor_profile'] = mentor_profile
		request.data['entrepreneur_profile'] = entrepreneur_profile
		request.data['rating'] = rate
		request.data._mutable = _mutable

		if True:
		  #  if (datetime.date.today() - modelsof.created_at).days > 180:
			serializer = self.serializer_class(data=request.data)
			if serializer.is_valid():
				serializer.save()
			#messages.success(request,"Your Rating is submited ")
			return Response("Your Rating is Submited")

class getRating(GenericAPIView):
	queryset = Myrating.objects.all()
	serializer_class = myrating_serializer

	def get(self,request):
		if not request.user.is_authenticated:
			return Response("Login first")
		df=pd.DataFrame(list(Myrating.objects.all().values()))
		# nu=df.user_id.unique().shape[0]
		current_user_id = request.user.user.id
		print(request.user.user)

		print("Current user id: ",current_user_id)
		prediction_matrix,Ymean = Myrecommend()
		my_predictions = prediction_matrix[:,current_user_id-1]+Ymean.flatten()
		pred_idxs_sorted = np.argsort(my_predictions)
		pred_idxs_sorted[:] = pred_idxs_sorted[::-1]
		pred_idxs_sorted=pred_idxs_sorted+1
		print(pred_idxs_sorted)
		preserved = Case(*[When(pk=pk, then=pos) for pos, pk in enumerate(pred_idxs_sorted)])
		movie_list=list(Myrating.objects.filter(id__in = pred_idxs_sorted,).order_by(preserved)[:10])
		data = myrating_serializer(movie_list,many=True).data
		return Response(data)

class peopleyoumayknowformentee(generics.ListAPIView):
	serializer_class = MentorProfileSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def list(self, request):
		user = self.request.user
		orgnization = Education.objects.filter(user=user).values_list('institute',flat=True)
		if orgnization is not None:
			if user.is_mentor:
				mento_exp = Education.objects.filter(Q(institute__in=orgnization)).exclude(user=self.request.user)
				serializer1 = MentorProfileSerializer(mento_exp,many=True,context={
                                           'request': self.request}).data
		Workexperience = WorkExperience.objects.filter(user=user).values_list('company_name',flat=True)
		if Workexperience is not None:
			if user.is_mentor:
				mento_work = WorkExperience.objects.filter(Q(company_name__in=Workexperience)).exclude(user=self.request.user)
				serializer2 = MentorProfileSerializer(mento_work,many=True,context={
                                           'request': self.request}).data
		degree = Education.objects.filter(user=user).values_list('degree',flat=True)
		if degree is not None:
			if user.is_mentor:
				mento_degree = Education.objects.filter(Q(degree__in=degree)).exclude(user=self.request.user)
				serializer3 = MentorProfileSerializer(mento_degree,many=True,context={
                                           'request': self.request}).data

		serializer = serializer1+serializer2+serializer3
		return Response(serializer)

class peopleyoumayknowformentor(generics.ListAPIView):
	serializer_class = MentorProfileSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def list(self, request):
		user = self.request.user
		orgnization = Education.objects.filter(user=user).values_list('institute',flat=True)
		if orgnization is not None:
			if user.is_entrepreneur:
				mento_exp = Education.objects.filter(Q(institute__in=orgnization)).exclude(user=self.request.user)
				serializer1 = MentorProfileSerializer(mento_exp,many=True,context={
                                           'request': self.request}).data
		Workexperience = WorkExperience.objects.filter(user=user).values_list('company_name',flat=True)
		if Workexperience is not None:
			if user.is_entrepreneur:
				mento_work = WorkExperience.objects.filter(Q(company_name__in=Workexperience)).exclude(user=self.request.user)
				serializer2 = MentorProfileSerializer(mento_work,many=True,context={
                                           'request': self.request}).data
		degree = Education.objects.filter(user=user).values_list('degree',flat=True)
		if degree is not None:
			if user.is_entrepreneur:
				mento_degree = Education.objects.filter(Q(degree__in=degree)).exclude(user=self.request.user)
				serializer3 = MentorProfileSerializer(mento_degree,many=True,context={
                                           'request': self.request}).data

		serializer = serializer1+serializer2+serializer3
		return Response(serializer)

class prototypeview(generics.ListCreateAPIView):
	serializer_class = Prototypeserializer
	queryset = Prototype.objects.all()
	permission_classes = [permissions.IsAuthenticated]
	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)

class PrototypeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Prototype.objects.all()
    serializer_class = Prototypeserializer
    permission_classes = [permissions.IsAuthenticated]

class Searchstartup(generics.ListAPIView):
	serializer_class = StartupSerializer
	permission_classes = (permissions.IsAuthenticated,)
	def list(self, request):
		user = self.request.user
		orgnization = Startup.objects.filter(user=user).values_list('natureOfBusinessActivity',flat=True)
		if orgnization is not None:
			if user.is_mentor:
				mento_exp = Startup.objects.filter(Q(natureOfBusinessActivity__in=orgnization)).exclude(user=self.request.user)
				serializer1 = MentorProfileSerializer(mento_exp,many=True,context={
                                           'request': self.request}).data
		Workexperience = Startup.objects.filter(user=user).values_list('constitutionOfBusiness',flat=True)
		if Workexperience is not None:
			if user.is_mentor:
				mento_work = Startup.objects.filter(Q(constitutionOfBusiness__in=Workexperience)).exclude(user=self.request.user)
				serializer2 = MentorProfileSerializer(mento_work,many=True,context={
                                           'request': self.request}).data

		serializer = serializer1+serializer2
		return Response(serializer)

		




