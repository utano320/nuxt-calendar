<template>
  <p>Signing in...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  mounted: async function() {
    await this.$store.dispatch('handleAuthentication');
    if (this.isLoggedIn) {
      this.$router.replace('/member');
    } else {
      this.$router.replace('/');
    }
  }
};
</script>
