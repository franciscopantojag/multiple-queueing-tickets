import { ServiceBuilder, Options, Driver } from 'selenium-webdriver/chrome';
import chromedriver from 'chromedriver';

const service = new ServiceBuilder(chromedriver.path).enableVerboseLogging().build();
const options = new Options();

export const getDriver = () => Driver.createSession(options, service);
