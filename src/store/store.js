import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        language: "en"
    },
    getters: {
        getLanguage: state => {
            return state.language
        }
    },
    mutations: {
        updateLanguage: (state, payload) => {
            return state.language = payload
        }
    },
    actions: {
        updateLanguage: (context, payload) => {
            context.commit('updateLanguage', payload)
        }
    }
})

export default store;