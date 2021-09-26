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

    <button v-show="false">
      <v-btn icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </button>
    <v-menu transition="scroll-y-transition">
      <template #activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-app-bar-nav-icon />
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.name"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'ホーム', icon: 'mdi-home', to: '/' },
        { title: '通知', icon: 'mdi-bell-outline', to: '/Notifications' },
        { title: 'プロフィール', icon: 'mdi-account', to: '/profile' },
        { title: 'ログアウト', icon: 'mdi-logout', to: '/logout' },
        { title: 'ログイン', icon: 'mdi-login', to: '/login' }
      ]
    }
  }
}
</script>

<style>

</style>
