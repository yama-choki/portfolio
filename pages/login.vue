<template>
  <div class="container">
    <p class="title is-1 is-spaced">user:{{ this.$store.getters['login/getUserName'] }}</p>
    <button @click="loginGoogle">
      Google ログイン
    </button>
    <button @click="loginTwitter">
      Twitter ログイン
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    loginGoogle () {
      // eslint-disable-next-line no-console
      console.log('Google login')
      this.$store.dispatch('login/loginGoogle')
    },
    loginTwitter () {
      // eslint-disable-next-line no-console
      console.log('Twitter login')
      this.$store.dispatch('login/loginTwitter')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

button{
  background: pink;
}
</style>
