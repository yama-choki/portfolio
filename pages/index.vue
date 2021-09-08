<template>
  <section class="container">
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
              <v-icon>mdi-feather</v-icon>
              <span>Port Folio</span>
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
          <v-expand-transition>
            <Home />
          </v-expand-transition>
        </main>

        <footer>
          <v-footer color="#00CCCC" dark app max-width="1263px">
            <v-spacer />
            <v-btn icon @click="search != search">
              <v-icon>mdi-home</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn icon @click="show = 'search'">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-reload</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn icon>
              <v-icon>mdi-pencil-plus</v-icon>
            </v-btn>
            <v-spacer />
          </v-footer>
        </footer>
      </div>
    </v-app>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      // eslint-disable-next-line no-undef
      postDialog: false,
      search: false,
      post: false,
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

header{
  margin: 0 auto;
}

footer{
  margin: 0 auto;
}

main {
  margin-top: 64px;
  align-content: center;
}
</style>
