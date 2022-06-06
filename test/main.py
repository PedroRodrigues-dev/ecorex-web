from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://localhost:3000")
driver.maximize_window() 

dropdowns = driver.find_elements(By.CLASS_NAME, "dropdown")
sleep(1)
driver.execute_script("window.scrollBy(0,2000)","")
sleep(1)
driver.execute_script("window.scrollBy(0,-2000)","")
sleep(1)

for dropdown in dropdowns:
    dropdown.click()
    sleep(0.5)
    
sleep(1)
driver.close()
    