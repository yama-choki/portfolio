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
              <v-icon>mdi-account-circle</v-icon>
              <span>Port Folio Forum</span>
            </v-toolbar-title>

            <v-spacer />

            <v-btn icon>
              <v-app-bar-nav-icon @click="drawer = !drawer" />
            </v-btn>

            <template #extension>
              <v-tabs left>
                <v-spacer />
                <v-tab>プロフィール</v-tab>
                <v-spacer />
                <v-tab>ブックマーク</v-tab>
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
        <Bookmark />
      </v-main>
    </v-app>
  </section>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Notifications', icon: 'mdi-bell-outline', to: '/' },
        { title: 'Messages', icon: 'mdi-email-outline', to: '/' },
        { title: 'Profile', icon: 'mdi-account', to: '/profile' },
        { title: 'Logout', icon: 'mdi-logout', to: '/' }
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
