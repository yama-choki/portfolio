/* eslint-disable vue/require-v-for-key */
<template>
  <div class="home">
    <v-app>
      <ul>
        <!-- v-for=""をつけて投稿の数表示するように書き換える-->
        <li v-for="n in 10" :key="n" class="port-folio">
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
                <div class="account-name">
                  <v-list-item-content>
                    <v-list-item-title>Evan You</v-list-item-title>
                  </v-list-item-content>
                </div>
              </v-list-item>
            </v-card-actions>
            <v-card-text class="pa-0">
              "Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
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
    </v-app>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home ul {
  list-style: none;
  margin: 8px;
  padding: 0;
}
.home ul li{
  margin-bottom: 18px;
}
</style>
