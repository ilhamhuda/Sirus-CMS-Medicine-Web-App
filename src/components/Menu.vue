<template>
    <v-list dense>

      <template v-for="item in items">

        <v-list-group
          :key="item.text"
          v-if="item.children"
        >
          <v-list-tile slot="activator">
            <v-list-tile-action>
              <v-icon :color="item.iconColor?item.iconColor:'white'">{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-title>{{item.text}}</v-list-tile-title>
          </v-list-tile>

          <template v-for="child in item.children">
            <v-list-group
              no-action
              sub-group
              value="true"
              :key="child.text"
              v-if="child.children"
            >
              <v-list-tile slot="activator">
                <v-list-tile-title>{{child.text}}</v-list-tile-title>
              </v-list-tile>

              <template v-for="gchild in child.children">
                <v-list-tile :key="gchild.text" :href="gchild.href">
                  <v-list-tile-title v-text="gchild.text"></v-list-tile-title>
                </v-list-tile>
              </template>

            </v-list-group>

            <v-list-tile :key="child.text" v-else :href="child.href">
              <v-list-tile-action class="tile-action-level2">
                <v-icon v-text="child.icon" :color="child.iconColor?child.iconColor:'green accent-4'"></v-icon>
              </v-list-tile-action>
              <v-list-tile-title v-text="child.text" :class="child.iconColor?child.iconColor:'green--text text--accent-4'"></v-list-tile-title>
            </v-list-tile>
          </template>

        </v-list-group>

        <v-list-tile :key="item.text" v-else :href="item.href">
          <v-list-tile-action>
            <v-icon :color="item.iconColor?item.iconColor:'white'">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title >{{item.text}}</v-list-tile-title>
        </v-list-tile>

      </template>
    </v-list>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null
    }),
    props: {
      source: String,
      menuItems: {
        type: Array,
        default: () => [],
        description: 'Sidebar links. Can be also provided as children components (sidebar-item)'
      }
    },
    computed: {
      items () {
        console.log(this.menuItems)
        // for (var i = 0; i < this.menuItems.length; i++) {
        //   this.menuItems[i].href = '#/' + this.menuItems[i].path
        // }
        // console.log('xmenu', this.menuItems)
        return this.menuItems
      }
    },
    mounted () {
    }
  }
</script>