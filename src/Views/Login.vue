<template>
    <div class="login-screen">
        <div class="login">
            <img src="../assets/ReachOutLogo.png" alt="" class="login-logo">
            <div class="h1-div">
                <h1 class="login-h1">Welcome to ReachOut</h1>
            </div>
            <div class="login-buttons">
                <b-button
                    class="btn btn-danger mt-5 login-page-btn"
                    v-if="!authenticated"
                    @click="login()">
                    Log In
                </b-button>

                <b-button
                    class="btn btn-danger btn-margin mt-5 login-page-btn"
                    v-if="authenticated"
                    @click="logout()">
                    Log Out
                </b-button>
                <b-button  v-b-modal.signup-modal class="mt-4 mb-4 login-page-btn" variant="default">Sign Up</b-button>
                <SignUpModal />   
                <b-button v-b-modal.about-modal class="btn text-center login-page-btn" variant="primary">About ReachOut</b-button>
                <AboutModal />
            </div>
        </div>
        
    </div>
    

</template>

<script>
import SignUpModal from '../components/SignUpModal.vue'
import AboutModal from '../components/AboutModal.vue'
import auth0 from 'auth0-js'
import AuthService from '../Auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth
export default {
    name: 'Login',
    components: {
        SignUpModal,
        AboutModal
    },
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
        showModal () {
            this.$refs.myModalRef.show()
        },
        login,
        logout
    }
};
</script>

<style>
.login-screen {
    background-image: url(http://genchi.info/image/united-states-flag-wallpaper-3.jpg);
    background-repeat: no-repeat;
    background-position: center; 
    width: 100vw;
    height: 100vh;
}
.login {
    display:flex;
    flex-flow: column wrap;
    align-items: center !important;
    width: 100vw;
}
.login-logo {
    width: 10vw;
    margin-top: 15vh;
}
.h1-div {
    display: flex;
    justify-content: center;
}
.login-h1 {
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    text-align: center !important;
    margin-top: 1em;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Notable', sans-serif;
    width: 20vw;
}
.login-buttons {
    display: flex;
    flex-flow: column wrap;
    align-items: center space-between;
    font-weight: bolder;
}
.login-page-btn {
    width: 12vw;
    justify-content: center !important;
}

</style>
