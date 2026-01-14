import {config} from './wdio.conf.ts';


  config.runner= 'local',
  config.specs= ['../test/specs/supermoney/sendMoney.spec.ts'],

  config.capabilities= [{
    platformName: 'Android',

    // 👇 ALL Appium capabilities MUST be prefixed
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'SamsungA55',
    'appium:udid': 'RZCY40K1QJA',
    'appium:appPackage': 'money.super.payments',
    'appium:appActivity': 'com.supermoney.payments.MainActivity',
    'appium:autoGrantPermissions': true,
    'appium:noReset': true,
    'appium:fullReset': false,

  }],

  config.logLevel= 'info',
  config.framework= 'mocha',
  config.services= ['appium'],
  config.mochaOpts= {
    timeout: 90000
  }

export {config};