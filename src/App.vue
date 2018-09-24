

<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <!-- <a class="navbar-brand" href="#">Auth0 - Vue</a>

          <router-link :to="'/home'"
            class="btn btn-primary btn-margin">
              Home
          </router-link> -->

          <!-- <button
            class="btn btn-danger"
            v-if="!authenticated"
            @click="login()">
              Log In
          </button>

          <button
            class="btn btn-danger btn-margin"
            v-if="authenticated"
            @click="logout()">
              Log Out
          </button> -->

        </div>
      </div>
    </nav>

    <div class="container">
      <router-view 
        :auth="auth" 
        :authenticated="authenticated">
      </router-view>
    </div>
  </div>
</template>

<script>
import auth0 from 'auth0-js'
import AuthService from './auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
.log-out-button {
    height: 5vh;
    width: 10vw;
    margin-top: 5vh;
    box-shadow: .5em .5em .1em black;
    border-radius: 5em;
    background-image: radial-gradient(white, blue);
}
</style>

.btn-margin {
  margin-top: 7px;
}