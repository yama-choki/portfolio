<template>
  <div class="profile">
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
</template>

<script>
export default {

}
</script>

<style>
.profile{
  max-width: 600px;
  margin: 128px auto 0px auto;
}
</style>
