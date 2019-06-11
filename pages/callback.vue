<template>
  <p>Signing in...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  mounted: async function() {
    await this.$store.dispatch('handleAuthentication');
    if (this.isLoggedIn) {
      this.$router.replace('/member');
    } else {
      this.$router.replace('/');
    }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
}
</script>
