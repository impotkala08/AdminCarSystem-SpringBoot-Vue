import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const stores = new Vuex.Store({
  state: {
    allData: [],
    allDataDisplay:null
  },
  mutations: {
    //setter
    setAllData(state, allData) {
      state.allData = allData;
    },
    setAllDataDisplay(state, allDataDisplay){
      state.allDataDisplay = allDataDisplay
    }
  },
  getters: {
    allData:state=>state.allData,
    allDataDisplay:state=>state.allDataDisplay,
  },
  actions: {},
  modules: {},
});

export default stores
