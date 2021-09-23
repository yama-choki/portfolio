<template>
  <section id="index">
    <v-app>
      <div>
        <Header />
        <main>
          <div id="top" />
          <v-expand-transition>
            <Home />
          </v-expand-transition>
        </main>
      </div>
    </v-app>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
    }
  }
}
</script>
