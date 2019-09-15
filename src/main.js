// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
// import axios from 'axios'

Vue.config.productionTip = false

window.callbackReg = {};

Vue.prototype.$jsonp = function(url, onSuccess, onError) {

  let cbName = 'cb' + String(Math.random()).slice(-6);
  while(callbackReg[cbName] !== undefined)
    cbName = 'cb' + String(Math.random()).slice(-6);

  console.log(cbName);
  let scUrl = url;
  scUrl += url.indexOf['?'] == -1 ? '?' : '&';
  scUrl += 'callback=window.callbackReg.' + cbName;

  let successFlag = false;
  callbackReg[cbName] = function(data) {
    console.log('qqqqqqqqqqqq');
    successFlag = true;
    delete callbackReg[cbName];
    onSuccess(data);
  }

  function checkCallback() {
    if(successFlag)
      return;
    // delete callbackReg[cbName];
    onError(scUrl);
  }

  let script = document.createElement('script');

  script.onreadystatechange = function() {
    if (this.readyState == 'complete' || this.readyState == 'loaded') {
      this.onreadystatechange = null;
      setTimeout(checkCallback, 0);
    }
  }
  script.onloadc = script.onerror = checkCallback;
  script.src = scUrl;

  document.body.appendChild(script);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
