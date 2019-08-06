<template>
</template>
<script>
export default {
  props: {
  },
  data () {
    return {
      username: '',
      test: 'xxx'
    }
  },
  computed: {
  },
  methods: {
    checkLogin () {
      console.log('this-loginMgt', this)
      console.log('this-loginMgt parse', this.$parse)
      return true
    },
    logout (onLogout) {
      this.$parse.User.logOut().then(() => {
        if (onLogout) {
          onLogout()
        }
      })
    },
    // getUser () {
    //   var user = this.$parse.User.logIn("test", "test1234")
    //   this.username = user
    //   console.log('user', user)
    // },
    login (username, password, onLogin, onError) {
      this.$parse.User.logIn(username, password).then(function (user) {
        if (onLogin) {
          onLogin(user)
        }
      }, function (user, error) {
        if (onError) {
          onError(user, error)
        }
      })
    },
    currentUser () {
      // (async () => { this.getUser() })()
      // const user = await Parse.User.logIn("test", "test1234");
      console.log('user', this.username)
      return this.$parse.User.current()
    }
  }
}
</script>
<style>
</style>
