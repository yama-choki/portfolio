<template>
  <v-footer color="#00CCCC" dark app max-width="1263px">
    <v-spacer />

    <v-btn icon @click="'home'">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-spacer />

    <v-btn icon @click="show ==='profile'">
      <v-icon>mdi-account</v-icon>
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
</template>

<script>
export default {
  data: () => {
    return {
      // eslint-disable-next-line no-undef
      searchDialog: false,
      postDialog: false,
      post: {
        text: '',
        portfolioUrl: '',
        snsAccount: '',
        kindOfPortfolio: '',
        created: '',
        user: '',
        comments: [],
        likes: { counnt: 0, user: [] },
        bookmark: { counnt: 0, user: [] }
      }
    }
  },
  methods: {
    add () {
      this.$store.dispatch('home/add', this.post)
      this.post.text = ''
      this.post.portfolioUrl = ''
      this.post.snsAccount = ''
      this.post.kindOfPortfolio = ''
    }
  }
}
</script>

<style>

</style>
