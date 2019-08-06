<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      width=250
      style = "background: linear-gradient(rgb(11, 91, 130) 0%, rgb(23, 130, 123) 100%)"
      dark
    >
      <div class="pt-2 mb-3" style="margin-left:30px;">
      <img src="https://sirus.io/images/fireants-light.png" alt="Ayo Track" class="ml-3 " height="100px">
      </div>
      <b-menu-app :menuItems="items">
      </b-menu-app>
    </v-navigation-drawer>
    <v-toolbar color="white"
      light fixed
      app
      id="layout-header"
      >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <img src="https://sirus.io/images/sirus.svg" style="width:100%; max-width:100px;">
      <span>{{appTitle}}</span>
      <v-spacer></v-spacer>
      <span></span>
        <v-btn dark @click="doLogout()" style = "background: linear-gradient(rgb(11, 91, 130) 0%, rgb(23, 130, 123) 100%)"> 
          <v-icon>power</v-icon>
          Logout
        </v-btn>

    </v-toolbar>
    <v-content>
      <v-container fluid class="pt-0 pl-0 pr-0 pb-1">
        <router-view/>
      </v-container>
    </v-content>
    <v-footer color="black" app id="layout-footer">
      <span class="white--text">&copy; 2019 | Drug Store</span>
    </v-footer>
  </v-app>
</template>

<script>
  import BMenuApp from '@/components/Menu'
  import MenuItems from './menuItems'
  export default {
    components: {
      BMenuApp
    },
    data: () => ({
      drawer: null,
      testclick: function () {
      },
      items: []
    }),
    props: {
      appTitle: {
        type: String,
        default: '',
        description: 'Application Title'
      }
    },
    created () {
      this.items = MenuItems.items
    },
    methods: {
      doLogout (event) {
        console.log('logout', event)
      }
    }
  }
</script>