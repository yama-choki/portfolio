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

      <v-main>
        <v-scroll-x-transition>
          <div v-show="show === 'profile'" class="profile">
            <div class="top">
              <div class="icon">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  />
                </v-list-item-avatar>
              </div>
              <div class="btn">
                <button>
                  <v-btn icon>
                    <v-icon color="#00CCCC">
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </button>
                <button v-show="false">
                  <v-btn icon>
                    <v-icon color="#00CCCC">
                      mdi-twitter
                    </v-icon>
                  </v-btn>
                </button>
              </div>
            </div>
            <div class="accountName">
              <h4>アカウントの名前＠肩書肩書肩書肩書肩書肩書肩書肩書</h4>
            </div>
            <div class="text">
              <p>自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。自己紹介テキスト。</p>
            </div>
            <div class="myPost">
              <Bookmark />
            </div>
          </div>
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

.profile {
  max-width: 600px;
  .top{
    display: flex;
    align-items: center;
    .btn{
      margin-left: auto;
    }
  }
}
</style>
