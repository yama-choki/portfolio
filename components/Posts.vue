/* eslint-disable vue/require-v-for-key */
<template>
  <div class="posts">
    <ul>
      <li v-for="sortedPost in sortedPosts" :key="sortedPost.id">
        <v-card
          class="mx-auto"
          color="#00CCCC40"
          max-width="600px"
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
            {{ sortedPost.text }}
          </v-card-text>
          <v-card-text class="pa-0">
            <a href="sortedPost.portfolioUrl">リンク先へ</a>
          </v-card-text>
          <v-card-text class="pa-0">
            <a href="sortedPost.snsAccount">作成者のSNS</a>
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
</template>

<script>
export default {
  computed: {
    sortedPosts () {
      return this.$store.getters['footer/sortedPosts']
    }
  },
  created () {
    this.$store.dispatch('footer/init')
  }
}
</script>

<style>
.posts{
  margin: 0 auto;
  max-width: 600px;
}
.posts ul {
  list-style: none;
  margin: 8px;
  padding: 0;
}
.posts ul li{
  margin-bottom: 18px;
}
</style>
