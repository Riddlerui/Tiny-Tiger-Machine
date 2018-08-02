import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import { Toast } from 'mint-ui'

Vue.prototype.$toast = Toast

//去除300毫秒的点击延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
