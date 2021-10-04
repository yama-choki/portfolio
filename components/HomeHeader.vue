<template>
  <v-app-bar
    color="#00CCCC"
    dark
    max-width="1263px"
    app
  >
    <v-toolbar-title>
      Port
    </v-toolbar-title>

    <v-spacer />

    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            ログイン
          </v-card-title>

          <div class="container">
            <p class="title is-1 is-spaced">user:{{ $store.getters['login/getUserName'] }}</p>
            <button @click="loginGoogle()">
              Google ログイン
            </button>
            <button @click="loginTwitter()">
              Twitter ログイン
            </button>
            <button @click="loginFacebook()">
              Facebook ログイン
            </button>
          </div>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              キャンセル
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    loginGoogle () {
      // eslint-disable-next-line no-console
      console.log('Google login')
      this.$store.dispatch('header/loginGoogle')
      this.dialog = false
    },
    loginTwitter () {
      // eslint-disable-next-line no-console
      console.log('Twitter login')
      this.$store.dispatch('header/loginTwitter')
      this.dialog = false
    },
    loginFacebook () {
      // eslint-disable-next-line no-console
      console.log('Facebook login')
      this.$store.dispatch('header/loginFacebook')
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  margin: 0 auto;
  display: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
