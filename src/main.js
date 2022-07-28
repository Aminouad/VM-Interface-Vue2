import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';
import BaseSpinner from './components/UI/BaseSpinner.vue';
Vue.config.productionTip = false;
Vue.component('base-button',BaseButton);
Vue.component('base-dialog',BaseDialog);
Vue.component('base-spinner',BaseSpinner);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')