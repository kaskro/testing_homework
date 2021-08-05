module.exports = {
  "src_folders" : ["tests"],
  "page_objects_path" : ['page-objects'],

  "webdriver" : {
    "start_process": true,
    "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    "host": "localhost",
    "port": 4444
  },

  "test_settings" : {
    "default" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    }
  }
}