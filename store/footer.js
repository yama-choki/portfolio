import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const postsRef = db.collection('posts')

export const state = () => ({
  posts: [],
  homeShow: 'home',
  accountShow: 'profile'
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('posts', postsRef)
  }),
  add: firestoreAction((context, post) => {
    post.created = firebase.firestore.FieldValue.serverTimestamp()
    postsRef.add(post)
  })
}

export const mutations = {
  accountPage (state) {
    state.homeShow = 'account'
  },
  homePage (state) {
    state.homeShow = 'home'
  }
}

export const getters = {
  sortedPosts: (state) => {
    const slicedPosts = state.posts.slice()
    return slicedPosts.sort(function (a, b) {
      if (a.created > b.created) {
        return -1
      } else {
        return 1
      }
    })
  }
}
