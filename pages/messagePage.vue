<template>
  <section id="index">
    <v-app>
      <div>
        <header>
          <v-app-bar
            color="#00CCCC"
            dark
            max-width="1263px"
            app
          >
            <v-toolbar-title>
              <span>Port Folio Forum</span>
              <v-icon>mdi-email</v-icon>
            </v-toolbar-title>
            <v-spacer />
            <v-btn icon>
              <v-app-bar-nav-icon @click="drawer = !drawer" />
            </v-btn>
          </v-app-bar>
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
      // eslint-disable-next-line no-undef
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
#index{
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
  margin: 64px 0px 48px 0px;
}
</style>
