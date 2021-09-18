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
              <v-icon>mdi-home</v-icon>
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
                  link
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
            <div class="home">
              <ul>
                <!-- v-for=""をつけて投稿の数表示するように書き換える-->
                <li v-for="post in posts" :key="post.id" class="port-folio">
                  <v-card
                    class="mx-auto"
                    color="#00CCCC40"
                    max-width="600px"
                    to="/"
                  >
                    <v-card-actions>
                      <v-list-item class="grow" to="/profile">
                        <v-list-item-avatar color="grey darken-3">
                          <v-img
                            class="elevation-6"
                            alt=""
                            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                          />
                        </v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>Evan You</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card-actions>
                    <v-card-text class="pa-0">
                      {{ post.text }}
                    </v-card-text>
                    <v-card-text class="pa-0">
                      <a href="post.portfolioUrl">リンク先へ</a>
                    </v-card-text>
                    <v-card-text class="pa-0">
                      <a href="post.snsAccount">作成者のSNS</a>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer />
                      <v-btn icon>
                        <v-icon>mdi-comment-outline</v-icon>
                      </v-btn>
                      <v-spacer />
                      <v-btn icon>
                        <v-icon>mdi-heart-outline</v-icon>
                      </v-btn>
                      <v-spacer />
                      <v-btn icon>
                        <v-icon>mdi-bookmark-outline</v-icon>
                      </v-btn>
                      <v-spacer />
                    </v-card-actions>
                  </v-card>
                </li>
              </ul>
            </div>
          </v-expand-transition>
        </main>

        <footer>
          <v-footer color="#00CCCC" dark app max-width="1263px">
            <v-spacer />

            <v-btn icon to="#top">
              <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-spacer />

            <v-dialog
              v-model="searchDialog"
              width="500"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Privacy Policy
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-divider />

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="#00CCCC"
                    text
                    @click="searchDialog = false"
                  >
                    I accept
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-spacer />

            <v-btn icon to="/test">
              <v-icon>mdi-reload</v-icon>
            </v-btn>

            <v-spacer />

            <v-dialog
              v-model="postDialog"
              persistent
              max-width="600px"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-pencil-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <form>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="postDialog = false"
                    >
                      キャンセル
                    </v-btn>
                    <button>
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="postDialog = false, add()"
                      >
                        投稿する
                      </v-btn>
                    </button>
                  </v-card-actions>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="12"
                          md="12"
                        >
                          <v-textarea
                            v-model="post.text"
                            label="ポートフォリオの説明"
                            required
                            counter="200"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                          md="12"
                        >
                          <v-text-field
                            v-model="post.portfolioUrl"
                            label="ポートフォリオ"
                            hint="URLを添付してください"
                            persistent-hint
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                          md="12"
                        >
                          <v-text-field
                            v-model="post.snsAccount"
                            label="SNSアカウント"
                            hint="URLを添付してください"
                            persistent-hint
                            required
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                        >
                          <v-select
                            v-model="post.kindOfPortfolio"
                            :items="['Webアプリ', 'Webデザイン','動画編集', 'イラスト', 'その他']"
                            label="ポートフォリオの種類"
                            required
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                </form>
              </v-card>
            </v-dialog>
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
      searchDialog: false,
      postDialog: false,
      items: [
        { title: 'ホーム', icon: 'mdi-home', to: '/' },
        { title: '通知', icon: 'mdi-bell-outline', to: '/NotificationsPage' },
        { title: 'メッセージ', icon: 'mdi-email-outline', to: '/messagePage' },
        { title: 'プロフィール', icon: 'mdi-account', to: '/profilePage' },
        { title: 'ログアウト', icon: 'mdi-logout', to: '/logoutPage' }
      ],
      post: {
        text: '',
        portfolioUrl: '',
        snsAccount: '',
        kindOfPortfolio: '',
        created: '',
        user: '',
        comments: [],
        likes: 0,
        bookmark: 0
      }
    }
  },
  computed: {
    posts () {
      return this.$store.getters['home/sortedPosts']
    }
  },
  created () {
    this.$store.dispatch('home/init')
  },
  methods: {
    add () {
      this.$store.dispatch('home/add', this.post)
      this.post.text = ''
      this.post.portfolioUrl = ''
      this.post.snsAccount = ''
      this.post.kindOfPortfolio = ''
      // eslint-disable-next-line no-console
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
