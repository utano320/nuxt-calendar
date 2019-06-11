<template>
  <section class="container">
    <div>
      <div v-if="isLoggedIn" class="content">
        <h2>ようこそ {{ userProfile.name }} さん</h2>
        <p>
          <img :src="userProfile.picture" width="64" height="64" />
        </p>
        <button class="button is-warning" @click="logout">
          <span class="icon">
            <i class="fa fa-sign-out" />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn', 'userProfile'])
  },
  beforeCreate() {
    console.log(['beforeCreate', this.isLoggedIn]);
  },
  craeted() {
    console.log(['create', this.isLoggedIn]);
  },
  beforeMount() {
    console.log(['beforeMount', this.isLoggedIn]);
  },
  mounted() {
    console.log(['mounted', this.isLoggedIn]);
    if (!this.isLoggedIn) this.$router.replace('/');
  },
  beforeUpdate() {
    console.log(['beforeUpdate', this.isLoggedIn]);
    if (!this.isLoggedIn) this.$router.replace('/');
  },
  updated() {
    console.log(['updated', this.isLoggedIn]);
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
img {
  border-radius: 50%;
}
</style>
