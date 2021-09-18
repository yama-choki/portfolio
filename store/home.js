import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const postsRef = db.collection('posts')

export const state = () => ({
  posts: []
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('posts', postsRef)
  }),
  add: firestoreAction((context, post) => {
    post.created = firebase.firestore.FieldValue.serverTimestamp()
    postsRef.add(post)
  }),
  remove: firestoreAction((context, id) => {
    postsRef.doc(id).delete()
  }),
  toggle: firestoreAction((context, post) => {
    postsRef.doc(post.id).update({
      done: !post.done
    })
  })
}

export const getters = {
  sortedTodos: (state) => {
    const slicedTodos = state.todos.slice()
    return slicedTodos.sort(function (a, b) {
      if (a.created < b.created) {
        return -1
      } else {
        return 1
      }
    })
  }
}
