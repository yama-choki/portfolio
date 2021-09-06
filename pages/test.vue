<template>
  <v-row
    class="blue lighten-4"
    style="height: 450px;"
    justify="center"
    align-content="center"
  >
    <v-col v-for="n in 3" :key="n" cols="3">
      <v-card color="blue" outlined tile height="150" />
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
