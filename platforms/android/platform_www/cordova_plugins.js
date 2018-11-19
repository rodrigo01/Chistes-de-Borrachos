cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admobpro-firebase.AdMob",
    "file": "plugins/cordova-plugin-admobpro-firebase/www/AdMob.js",
    "pluginId": "cordova-plugin-admobpro-firebase",
    "clobbers": [
      "window.AdMob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-extension": "1.5.4",
  "cordova-plugin-admobpro-firebase": "2.35.4"
};
// BOTTOM OF METADATA
});