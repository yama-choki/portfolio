<template>
  <section class="container">
    <v-app>
      <div>
        <header></header>
        <nav></nav>
        <main></main>
        <footer></footer>
      </div>
    </v-app>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      // eslint-disable-next-line no-undef
      show: 'home',
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Notifications', icon: 'mdi-bell-outline', to: '/' },
        { title: 'Messages', icon: 'mdi-email-outline', to: '/' },
        { title: 'Profile', icon: 'mdi-account', to: '/profile' },
        { title: 'Logout', icon: 'mdi-logout', to: '/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  padding: 0;
}

</style>
