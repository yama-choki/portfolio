/* eslint-disable vue/no-template-shadow */
<template>
  <section id="index">
    <v-app>
      <div>
        <header>
          <Header />
        </header>
        <main>
          <v-expand-transition>
            <Posts />
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
  margin: 64px 0px 48px 0px;
}
</style>
