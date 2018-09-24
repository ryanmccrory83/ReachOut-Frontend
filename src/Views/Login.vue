<template>
    <div class="login-screen">
        <div class="login">
            <img src="../assets/ReachOutLogo.png" alt="" class="login-logo">
            <div class="h1-div">
                <h1 class="login-h1">Welcome to ReachOut</h1>
            </div>
            <div class="login-buttons">
                <b-button  v-b-modal.signup-modal class="btn-default mt-4 mb-4">Sign Up</b-button>
                <SignUpModal />   
                <b-button v-b-modal.about-modal class="btn btn-primary">About ReachOut</b-button>
                <AboutModal />
            </div>
        </div>
        
    </div>
    

</template>

<script>
import SignUpModal from '../components/SignUpModal.vue'
import AboutModal from '../components/AboutModal.vue'
export default {
    name: 'Login',
    components: {
        SignUpModal,
        AboutModal
    },
    methods: {
        showModal () {
            this.$refs.myModalRef.show()
        }
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
    align-items: center;
}
.login-logo {
    width: 10vw;
    margin-top: 3em;
}
.h1-div {
    display: flex;
    justify-content: center;
}
.login-h1 {
    color: red;
    text-shadow: .2em .1em black;
    text-align: center;
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
SignUpModal {
    margin-bottom: 1em;
}

</style>
