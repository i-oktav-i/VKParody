// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import { Promise } from 'q'

Vue.config.productionTip = false

window.callbackReg = {};

Vue.prototype.$jsonp = function(url) {
  return new Promise(function(resolve, reject) {
    let cbName = 'cb' + String(Math.random()).slice(-6);
    while(callbackReg[cbName] !== undefined)
      cbName = 'cb' + String(Math.random()).slice(-6);

    let scUrl = url;
    scUrl += url.indexOf['?'] == -1 ? '?' : '&';
    scUrl += 'callback=window.callbackReg.' + cbName;

    let successFlag = false;
    callbackReg[cbName] = function(data) {
      successFlag = true;
      delete callbackReg[cbName];
      resolve(data);
    }

    function checkCallback() {
      this.remove();
      if(successFlag)
        return;
      delete callbackReg[cbName];
      reject(scUrl);
    }
    
    let script = document.createElement('script');

    script.onreadystatechange = function() {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        this.onreadystatechange = null;
        setTimeout(checkCallback, 0);
      }
    }
    script.onload = script.onerror = checkCallback;
    script.src = scUrl;

    document.body.appendChild(script);
  });
}

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});