import Vue from 'vue'

var Parse = require('parse')

// Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");
Parse.serverURL = 'https://parseapi.back4app.com/'

Vue.prototype.$parse = Parse

export default Parse
