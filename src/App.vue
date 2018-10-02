

<template>
      <router-view 
        :auth="auth" 
        :authenticated="authenticated">
      </router-view>
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