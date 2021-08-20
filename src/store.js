import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

Vue.use(Vuex, Axios);
Vue.use(Vuex);

//const funcURL = "https://us-central1-cloud-d9f02.cloudfunctions.net/"
const funcURL = "http://localhost:5001/cloud-d9f02/us-central1/"

const fbConfig = {
  apiKey: "AIzaSyAzXD6V0AdF27NVWIbxBJcmkE1mjfkIolU",
  authDomain: "cloud-d9f02.firebaseapp.com",
  databaseURL: "https://cloud-d9f02.appspot.com",
  projectId: "cloud-d9f02",
}


const db = firebase.initializeApp(fbConfig).firestore();
let ref = db.collection('data');

//Axios.defaults.baseURL = 'http://localhost:5001/cloud-d9f02/us-central1/'

export default new Vuex.Store({
  state: {
    records: []
  },
  mutations: {
    setRecords: (state, newRecords) => {
      state.records = newRecords;
    }
  },
  actions: {
    getData(state) {
      functions.https.aggregate();
    },
    doUpdateRecord({ commit }, data) {
      //let setSf = ref.doc().set( {"data":[{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097}]} );
      console.log(data)
      console.log(`${funcURL}updatedata`);
      Axios(`${funcURL}updatedata`, {
        method: 'POST',
        data: data
      })
        .then(response => response.status)
        .catch(err => console.warn(err));
      //let setSf = ref.doc().update(data)
    }
    ,
    doSendRecord({ commit }) {
      //let setSf = ref.doc().set( {"data":[{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097},{"sessionID":604143841,"timestamp":0.0,"action":0,"teamID":0,"botID":11,"xLocation":-26.0,"zLocation":45.099998474121097,"xHeading":-26.0,"zHeading":47.099998474121097}]} );
      let data = {}
      console.log(`${funcURL}senddata`);
      Axios(`${funcURL}senddata`, {
        method: 'POST',
        data: data
      })
        .then(response => response.status)
        .catch(err => console.warn(err));
      //let setSf = ref.doc().update(data)
    }
    ,
    doFetchRecords({ commit }) {
      
      Axios(`${funcURL}getdata`, { method: 'GET' })
        .then(response => response.data)
        .then(data => {
          commit('setRecords', data);
          //console.log(data)
        })
        .catch(err => console.warn(err));
      
      //console.log(data);
      // let getDoc = ref.get()
      //   .then(doc => {
      //     doc.forEach( item=>{  
      //       console.log(item.data());
      //        commit('setRecords', item.data());
      //     });
      // })
      // .catch(err => {
      //     console.log('Error getting document', err);
      // });
    }
  },
  getters: {
    getRecords: state => state.records
  },
  modules: {
  }
})
