import { Builder } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

export const startDriver = () => new Builder().forBrowser('chrome').build();
