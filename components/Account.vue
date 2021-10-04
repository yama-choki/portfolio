<template>
  <div id="account">
    <Profile v-if="$store.state.header.accountShow === 'profile'" />
    <Likes v-else-if="$store.state.header.accountShow === 'likes'" />
    <Comments v-else-if="$store.state.header.accountShow === 'comments'" />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
