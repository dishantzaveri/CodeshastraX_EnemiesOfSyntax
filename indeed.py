import time
import streamlit as st
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
import pandas as pd
import json
import torch

cService = webdriver.ChromeService(executable_path='chromedriver.exe')
driver = webdriver.Chrome(service = cService)

driver.get("https://internshala.com/internship/detail/project-management-internship-in-multiple-locations-at-special-situation-advisors-india-private-limited1711792369")
dining_ratings  = driver.find_element(By.XPATH,"/html/body/div[1]/div[19]/div/div/div/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]").text
# Perform other actions...
delivery_ratings  = driver.find_element(By.XPATH,"/html/body/div[1]/div[19]/div/div/div/div[2]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[1]/span").text
print(dining_ratings,delivery_ratings)
driver.get('https://internshala.com/internship/detail/project-management-internship-in-multiple-locations-at-special-situation-advisors-india-private-limited1711792369')
time.sleep(4)
first_pate =driver.find_elements(By.XPATH,"//p[@class='sc-1hez2tp-0 sc-csZoYU dJxGwQ']")
#print(reviews)
reviews = []
for review in first_pate:
    reviews.append(review.text)
for i in range(3):
    driver.find_element(By.XPATH,'/html/body/div[1]/div/main/div/section[4]/div/div/section/div[3]/div[2]/div/a[6]').click()
    time.sleep(2)
    page = driver.find_elements(By.XPATH,"//p[@class='sc-1hez2tp-0 sc-csZoYU dJxGwQ']")
    #print(reviews)
    for review in page:
        reviews.append(review.text)
for review in reviews:
    print(review)
# Close the browser window
driver.quit()
#class="sc-1hez2tp-0 sc-dAWfgX kCCGzy"

df = pd.DataFrame(reviews, columns=['Review'])
df.to_csv('review_zomato.csv', index=False)
print("Reviews saved to 'review_zomato.csv' file.")