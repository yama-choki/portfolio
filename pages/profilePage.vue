<template>
  <section id="profile">
    <v-app>
      <header>
        <v-card class="overflow-hidden">
          <v-app-bar
            color="#00CCCC"
            dark
            scroll-target="#scrolling-techniques-3"
            app
            max-width="1263px"
          >
            <v-toolbar-title>
              <span>Port Folio Forum</span>
              <v-icon>mdi-account</v-icon>
            </v-toolbar-title>

            <v-spacer />

            <v-btn icon>
              <v-app-bar-nav-icon @click="drawer = !drawer" />
            </v-btn>

            <template #extension>
              <v-tabs left>
                <v-spacer />
                <v-tab @click="show = 'profile'">
                  プロフィール
                </v-tab>
                <v-spacer />
                <v-tab @click="show = 'bookmark'">
                  ブックマーク
                </v-tab>
                <v-spacer />
              </v-tabs>
            </template>
          </v-app-bar>
        </v-card>
      </header>

      <nav>
        <v-navigation-drawer v-model="drawer" app>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                <v-icon>mdi-account-circle-outline</v-icon>
                Account Name
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
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
        </v-navigation-drawer>
      </nav>

      <v-main>
        <v-scroll-x-transition>
          <Test v-show="show === 'profile'" />
        </v-scroll-x-transition>
        <v-scroll-x-reverse-transition>
          <Bookmark v-show="show === 'bookmark'" />
        </v-scroll-x-reverse-transition>
      </v-main>
    </v-app>
  </section>
</template>

<script>
export default {
  data () {
    return {
      show: 'profile',
      drawer: null,
      items: [
        { title: 'ホーム', icon: 'mdi-home', to: '/' },
        { title: '通知', icon: 'mdi-bell-outline', to: '/NotificationsPage' },
        { title: 'メッセージ', icon: 'mdi-email-outline', to: '/messagePage' },
        { title: 'プロフィール', icon: 'mdi-account', to: '/profilePage' },
        { title: 'ログアウト', icon: 'mdi-logout', to: '/logoutPage' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

#profile{
  max-width: 1263px;
  border: 1px solid rgb(200, 200, 200);
  margin: 0 auto;
}

header{
  margin: 0 auto;
}

footer{
  margin: 0 auto;
}

main {
  margin: 0 auto;
  align-content: center;
}
</style>
