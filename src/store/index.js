// 1、引入
import Vuex from 'vuex';
import Vue from 'vue';

// 包装引入
import actions from './actions';
import mutations from './mutations';
import getters from './getters'
// 2、安装
Vue.use(Vuex);
const state = {
  cartList:[]
}
// 3、导出
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
export default store;
