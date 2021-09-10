<template>
  <section id="index">
    <v-app>
      <div>
        <header>
          <v-app-bar
            color="#00CCCC"
            dark
            max-width="1263px"
            app
          >
            <v-toolbar-title>
              <v-icon>mdi-home</v-icon>
              <span>Port Folio Forum</span>
            </v-toolbar-title>
            <v-spacer />
            <v-btn icon>
              <v-app-bar-nav-icon @click="drawer = !drawer" />
            </v-btn>
          </v-app-bar>
        </header>
        <nav>
          <v-navigation-drawer v-model="drawer" app>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title">
                  <v-icon>mdi-account-circle-outline</v-icon>
                  Account Name
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider />

            <v-list
              dense
              nav
            >
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.to"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </nav>

        <main>
          <div id="top" />
          <v-expand-transition>
            <Home />
          </v-expand-transition>
        </main>

        <footer>
          <v-footer color="#00CCCC" dark app max-width="1263px">
            <v-spacer />

            <v-btn icon to="#top">
              <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-spacer />

            <v-dialog
              v-model="searchDialog"
              width="500"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Privacy Policy
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-divider />

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="#00CCCC"
                    text
                    @click="searchDialog = false"
                  >
                    I accept
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-spacer />

            <v-btn icon to="/test">
              <v-icon>mdi-reload</v-icon>
            </v-btn>

            <v-spacer />

            <v-dialog
              v-model="postDialog"
              persistent
              max-width="600px"
            >
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-pencil-plus</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="postDialog = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="postDialog = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
                <v-card-title>
                  <span class="text-h5">User Profile</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal first name*"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal middle name"
                          hint="example of helper text only on focus"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          label="Legal last name*"
                          hint="example of persistent helper text"
                          persistent-hint
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          required
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Password*"
                          type="password"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-select
                          :items="['0-17', '18-29', '30-54', '54+']"
                          label="Age*"
                          required
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                      >
                        <v-autocomplete
                          :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                          label="Interests"
                          multiple
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
              </v-card>
            </v-dialog>

            <v-spacer />
          </v-footer>
        </footer>
      </div>
    </v-app>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      // eslint-disable-next-line no-undef
      searchDialog: false,
      postDialog: false,
      search: false,
      post: false,
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-home', to: '/' },
        { title: 'Notifications', icon: 'mdi-bell-outline', to: '/' },
        { title: 'Messages', icon: 'mdi-email-outline', to: '/' },
        { title: 'Profile', icon: 'mdi-account', to: '/profile' },
        { title: 'Logout', icon: 'mdi-logout', to: '/' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#index{
  max-width: 1263px;
  border: 1px solid rgb(200, 200, 200);
  margin: 0 auto;
}

header{
  margin: 0 auto;
}

footer{
  margin: 0 auto;
}

main {
  margin-top: 64px;
}
</style>
