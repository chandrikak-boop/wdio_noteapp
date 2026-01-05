import {config} from './wdio.conf.ts';
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    config.runner = 'local',
    config.tsConfigPath = './tsconfig.json',
    
    config.port = 4723,
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // of the configuration file being run.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // The path of the spec files will be resolved relative from the directory of
    // of the config file unless it's absolute.
    //
    config.specs = [
        '../test/specs/android_notes.spec.ts','../test/specs/android_checklist.spec.ts'
    ],
    

    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
//Android Emulator
    config.capabilities =[ {
        // capabilities for local Appium web tests on an Android Emulator
        'appium:platformName': "android",
        'appium:deviceName': "Pixel 9",
       'appium:platformVersion': "16.0",
        'appium:automationName': 'UiAutomator2',
        'appium:app': "app/android/ColorNote_Notepad.apk",
        "appium:autoGrantPermissions": true
    }]

      config.services= [
  ['appium', {
    command: 'appium',
    args: {
      port: 4723,
      relaxedSecurity: true,
      sessionOverride: true
    }
  }]
]

export {config};


