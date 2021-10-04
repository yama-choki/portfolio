/* eslint-disable vue/no-template-shadow */
<template>
  <section id="index">
    <v-app>
      <div>
        <header>
          <Home-header v-show="$store.state.footer.homeShow === 'home'" />
          <Account-header v-show="$store.state.footer.homeShow === 'account'" />
        </header>
        <main>
          <v-expand-transition>
            <Posts v-show="$store.state.footer.homeShow === 'home'" />
          </v-expand-transition>
          <v-expand-transition>
            <Account v-show="$store.state.footer.homeShow === 'account'" />
          </v-expand-transition>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </v-app>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#index{
  max-width: 1263px;
  border: 1px solid rgb(230, 230, 230);
  margin: 0 auto;
}

header{
  margin: 0 auto;
}

footer{
  margin: 0 auto;
}

main {
  margin: 72px 0px 48px 0px;
}
</style>
