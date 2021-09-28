import firebase from '~/plugins/firebase'

export const state = () => ({
  userUid: '',
  userName: ''
})

export const mutations = {
  setUserUid (state, userUid) {
    state.userUid = userUid
  },
  setUserName (state, userName) {
    state.userName = userName
  }
}

export const actions = {
  loginGoogle ({ commit }) {
    // eslint-disable-next-line no-console
    console.log('Google login action')
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const user = result.user
      // eslint-disable-next-line no-console
      console.log('success : ' + user.uid + ' : ' + user.displayName)
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
    }).catch(function (error) {
      const errorCode = error.code
      // eslint-disable-next-line no-console
      console.log('error : ' + errorCode)
    })
  },
  loginTwitter ({ commit }) {
    // eslint-disable-next-line no-console
    console.log('Twitter login action')
    const provider = new firebase.auth.TwitterAuthProvider()
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const user = result.user
      // eslint-disable-next-line no-console
      console.log('success : ' + user.uid + ' : ' + user.displayName)
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
    }).catch(function (error) {
      const errorCode = error.code
      // eslint-disable-next-line no-console
      console.log('error : ' + errorCode)
    })
  }
}

export const getters = {
  getUserUid (state) {
    return state.userUid
  },
  // eslint-disable-next-line no-dupe-keys
  getUserName (state) {
    return state.userName
  }
}
