/* eslint-disable no-undef */
<template>
  <v-app-bar
    color="#00CCCC"
    dark
    app
    max-width="1263px"
  >
    <v-toolbar-title>
      <span>Port</span>
    </v-toolbar-title>

    <v-spacer />

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

    <template #extension>
      <v-tabs>
        <v-spacer />
        <v-tab @click="profilePage ()">
          プロフィール
        </v-tab>
        <v-spacer />
        <v-tab @click="likesPage ()">
          いいね！
        </v-tab>
        <v-spacer />
        <v-tab @click="commentsPage ()">
          コメント
        </v-tab>
        <v-spacer />
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  data () {
    return {
      show: 'profile',
      items: [
        { title: 'ホーム', icon: 'mdi-home', to: '/' },
        { title: '通知', icon: 'mdi-bell-outline', to: '/NotificationsPage' },
        { title: 'メッセージ', icon: 'mdi-email-outline', to: '/messagePage' },
        { title: 'プロフィール', icon: 'mdi-account', to: '/profilePage' },
        { title: 'ログアウト', icon: 'mdi-logout', to: '/logoutPage' }
      ]
    }
  },
  methods: {
    profilePage () {
      this.$store.commit('header/profilePage')
    },
    likesPage () {
      this.$store.commit('header/likesPage')
    },
    commentsPage () {
      this.$store.commit('header/commentsPage')
    }
  }
}
</script>

<style>

</style>
