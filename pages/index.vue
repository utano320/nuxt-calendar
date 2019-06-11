<template>
  <section class="container">
    <div v-if="!isLoggedIn" class="content">
      <h2>ゲスト</h2>
      <button class="button is-primary" @click="login">
        <span class="icon">
          <i class="fa fa-sign-in" />
        </span>
        <span>Login</span>
      </button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  beforeUpdate: function() {
    // ログイン済みなら/memberへリダイレクト
    console.log(['mounted', this.isLoggedIn]);
    if (this.isLoggedIn) {
      this.$router.replace('/member');
    } else {
      console.log('no login');
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login');
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
</style>
