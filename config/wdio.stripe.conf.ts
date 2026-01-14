import {config} from './wdio.conf.ts';


  config.runner= 'local',
  config.specs= ['../test/specs/stripe/paymentFlow.spec.ts'],

 config.capabilities = [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'emulator-5554', 
    'appium:platformVersion': '15.0',
    'appium:app':'app/android/paymentsheet-example-release-22.6.0.apk',
    'appium:appWaitForLaunch': true,       
    'appium:noReset': false,              
    'appium:fullReset': false,         
    'appium:autoGrantPermissions': true,
    'appium:ensureWebviewsHavePages': true
}]



,

  config.logLevel= 'info',
  config.framework= 'mocha',
  config.services= ['appium'],
  config.mochaOpts= {
    timeout: 90000
  }

export {config};