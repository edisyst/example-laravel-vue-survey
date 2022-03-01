import {createStore} from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
  {
    id: 1,
    user_id: 1,
    title: "Primo questionario",
    slug: "primo-questionario",
    status: 1,
    description: "Cras ultricies mi eu turpis hendrerit fringilla. Curabitur ligula sapien, posuere imperdiet. ",
    created_at: "2022-02-28 17:50:03",
    updated_at: "2022-02-28 17:50:03",
    expire_date: "2022-11-30 17:48:02",
    questions: [
      {
        id: 1,
        type: 'select',
        questions: "Prima domanda?",
        description: null,
        data: {
          options: [
            { uuid: "usausausa-asdasderter-fdgd-dfg-try-tryrt", text: "USA" },
            { uuid: "itaita-asdasderter-fdgd-dfg-try-tryrt", text: "ITA" },
            { uuid: "espa-asdasderter-fdgd-dfg-try-tryrt", text: "ESP" },
          ]
        },
      },
      {
        id: 2,
        type: 'checkbox',
        questions: "Seconda domanda?",
        description: "Lorem ipsum",
        data: {
          options: [
            { uuid: "usausausa-asdasderter-fdgd-dfg-try-tryrt", text: "USA" },
            { uuid: "itaita-asdasderter-fdgd-dfg-try-tryrt", text: "ITA" },
            { uuid: "espa-asdasderter-fdgd-dfg-try-tryrt", text: "ESP" },
          ]
        },
      },
      {
        id: 3,
        type: 'radio',
        questions: "Seconda domanda?",
        description: "Lorem ipsum",
        data: {
          options: [
            { uuid: "usausausa-asdasderter-fdgd-dfg-try-tryrt", text: "USA" },
            { uuid: "itaita-asdasderter-fdgd-dfg-try-tryrt", text: "ITA" },
            { uuid: "espa-asdasderter-fdgd-dfg-try-tryrt", text: "ESP" },
          ]
        },
      },
    ],
  },
];

const store = createStore({
  state: {
    user: {
      data: {
        // name: 'Tom Cook',
        // email: 'tom@example.com',
        // imageUrl:
        //   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      token: sessionStorage.getItem('TOKEN'),
      // token: null,
      // token: 123,
    },
    surveys: [...tmpSurveys],
  },
  getters: {},
  actions: {
    // register({ commit }, user) {
    //   return fetch('http://127.0.0.1:8000/api/register', {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     method: "POST",
    //     body: JSON.stringify(user),
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       commit("setUser", res);
    //     })
    // },
    register({ commit }, user) {
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },

    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },

    logout({commit}) {
      return axiosClient.post('/logout')
        .then( response => {
          commit('logout');
          return response;
        })
    },



  },
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    }
  },
  modules: {},
})

export default store;
