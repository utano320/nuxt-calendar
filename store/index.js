import Vuex from 'vuex';

export default () =>
  new Vuex.Store({
    state: {
      idToken: null,
      userProfile: null
    },
    getters: {
      idToken: state => state.idToken,
      userProfile: state => state.userProfile,
      isLoggedIn: state => state.idToken !== null
    },
    mutations: {
      updateIdToken: (state, idToken) => (state.idToken = idToken),
      remove: state => {
        state.idToken = null;
        state.userProfile = null;
      },
      updateUserProfile: (state, userProfile) =>
        (state.userProfile = userProfile)
    },
    actions: {
      login() {
        this.$auth0.login();
      },
      logout({ commit }) {
        commit('remove');
      },
      async handleAuthentication({ commit }) {
        const authResult = await this.$auth0.getAuthResult();
        console.log(authResult);
        commit('updateIdToken', authResult.idToken);
        commit(
          'updateUserProfile',
          this.$auth0.getUserProfile(authResult.idToken)
        );
      }
    }
  });
