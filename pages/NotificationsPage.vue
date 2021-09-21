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
              <v-icon>mdi-bell</v-icon>
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
          </v-app-bar>
        </header>

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
