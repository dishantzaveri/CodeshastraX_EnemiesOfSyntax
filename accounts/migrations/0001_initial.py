
import accounts.models
import datetime
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('email', models.EmailField(max_length=254, primary_key=True, serialize=False, verbose_name='Email Address')),
                ('name', models.CharField(max_length=30)),
                ('dob', models.DateField(blank=True, null=True)),
                ('twitter', models.URLField(blank=True, max_length=255, null=True)),
                ('linkedin', models.URLField(blank=True, max_length=255, null=True)),
                ('interests', models.TextField(blank=True, max_length=255, null=True)),
                ('about', models.TextField(blank=True, null=True)),
                ('profile_pic', models.ImageField(blank=True, null=True, upload_to='')),
                ('is_entrepreneur', models.BooleanField(default=False)),
                ('is_mentor', models.BooleanField(default=False)),
                ('is_event_manager', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='MentorProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expertise', models.CharField(blank=True, max_length=70, null=True)),
                ('latitude', models.FloatField(blank=True, null=True)),
                ('longitude', models.FloatField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='WorkExperience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job_title', models.CharField(max_length=255)),
                ('company_name', models.CharField(max_length=255)),
                ('location', models.CharField(blank=True, max_length=255, null=True)),
                ('industry', models.CharField(blank=True, max_length=255, null=True)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('description', models.TextField(blank=True, max_length=255, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='experience', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Startup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('legalNameOfBusiness', models.CharField(blank=True, max_length=255, null=True)),
                ('tradeName', models.CharField(max_length=255)),
                ('is_verified', models.BooleanField(blank=True, default=False, null=True)),
                ('gstin', models.CharField(blank=True, max_length=255, null=True, unique=True)),
                ('cin', models.CharField(blank=True, max_length=255, null=True, unique=True)),
                ('gstnStatus', models.CharField(blank=True, max_length=255, null=True)),
                ('cin_status', models.CharField(blank=True, max_length=255, null=True)),
                ('dateOfRegistration', models.CharField(blank=True, max_length=255, null=True)),
                ('constitutionOfBusiness', models.CharField(blank=True, max_length=255, null=True)),
                ('taxpayerType', models.CharField(blank=True, max_length=255, null=True)),
                ('natureOfBusinessActivity', models.CharField(blank=True, max_length=255, null=True)),
                ('principalPlaceOfBusinessAddress', models.CharField(blank=True, max_length=255, null=True)),
                ('stateJurisdiction', models.CharField(blank=True, max_length=255, null=True)),
                ('centerJurisdiction', models.CharField(blank=True, max_length=255, null=True)),
                ('aadhaar_linked', models.CharField(blank=True, max_length=255, null=True)),
                ('pitch_deck', models.FileField(blank=True, null=True, upload_to=accounts.models.user_directory_path)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='startup', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Prototype',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('videofile', models.FileField(blank=True, null=True, upload_to='')),
                ('description', models.TextField(null=True, verbose_name=True)),
                ('paper', models.FileField(blank=True, null=True, upload_to='')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EntrepreneurProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mentor', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.mentorprofile')),
                ('startup', models.ManyToManyField(to='accounts.startup')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('institute', models.CharField(max_length=255)),
                ('degree', models.CharField(blank=True, max_length=255, null=True)),
                ('study_field', models.CharField(blank=True, max_length=255, null=True)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('grade', models.CharField(blank=True, max_length=255, null=True)),
                ('extracurriculars', models.TextField(blank=True, max_length=255, null=True)),
                ('description', models.TextField(blank=True, max_length=255, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='education', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Coins',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coins', models.PositiveIntegerField(blank=True, default=30, null=True)),
                ('date_modified', models.DateField(default=datetime.date.today)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='coins', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Myrating',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField(default=1, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)])),
                ('entrepreneur_profile', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='rating_entrepreneur', to='accounts.entrepreneurprofile')),
                ('mentor_profile', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='rating_mentor', to='accounts.mentorprofile')),
            ],
            options={
                'unique_together': {('mentor_profile', 'entrepreneur_profile')},
            },
        ),
        migrations.CreateModel(
            name='Mentorship',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('is_active', models.BooleanField(default=True)),
                ('ended_at', models.DateTimeField(blank=True, null=True)),
                ('entrepreneur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='entrepreneur', to=settings.AUTH_USER_MODEL)),
                ('mentor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='mentor', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'unique_together': {('mentor', 'entrepreneur')},
            },
        ),
    ]
