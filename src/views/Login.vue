<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary" style="height:100px">
                 <div style="padding-top:20px;margin-left:10px;">
      <img src="https://sirus.io/images/fireants-light.png" alt="Ayo Track" class="ml-3 " height="100px"  style="padding-top:20px;margin-left:50px;">
      </div>
                <v-spacer></v-spacer>

              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field 
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    type="text"
                    v-model="username">
                  </v-text-field>
                  <v-text-field 
                    id="password"
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password">
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="DoLogin">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import LoginMgt from '@/views/LoginMgt'
  var objLoginMgt = new Vue(LoginMgt)
  export default {
    data: () => ({
      drawer: null,
      username: '',
      password: ''
    }),
    props: {
      source: String
    },
    methods: {
      DoLogin () {
        console.log(this.$route.query.redirect)
        var me = this
        // this.$refs.loginMgt.login(this.form.username, this.form.password,
        objLoginMgt.login(this.username, this.password,
          function (user) {
            // console.log (user)
            if (me.$route.query.redirect) {
              document.location = '/#' + me.$route.query.redirect
              // me.$router.go('')
              // me.$router.go(me.$route.query.redirect)
            } else {
              me.$router.go('')
            }
          },
          function (err) {
            console.log('error', err)
            if (typeof err.message !== 'undefined') {
              // me.notifyVue(err.message)
              alert(err.message)
            } else {
              // me.notifyVue('Login error')
              alert('Login error')
            }
          }
        )
      }
    }
  }
</script>