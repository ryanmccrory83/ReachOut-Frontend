<template>
    <div class="home-container">
        <div class="logo-container">
            <img src="../assets/ReachOutLogo.png" class="home-logo" alt="">
        </div>
        <div class="links">
            <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/17966271_10209963583900817_8300406579102339175_o.jpg?_nc_cat=0&oh=ceb7c33ed49d44974433849172d7c186&oe=5C14E04B" alt="Username" class="user-image">
            <a href="./Notifications" class="links-link">NOTIFICATIONS</a>
            <a href="./Deploy" class="links-link">REACHOUT</a>
            <a href="./Chats" class="links-link">CHAT LOUNGE</a>
            <a href="./Contacts" class="links-link" >CONTACTS (<img src="../assets/user-icon.png" alt="" class="contacts-icon"> {{ userData.length }}) </a>
            <b-button
                class="btn mt-5"
                variant="danger"
                v-if="!authenticated"
                @click="login()">
                Log Out
            </b-button>

            <b-button
                class="btn mt-5"
                variant="danger"
                v-if="authenticated"
                @click="logout()">
                Log Out
            </b-button>
        </div>
        
    </div>
</template>

<script>
import auth0 from 'auth0-js'
import AuthService from '../Auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth
export default {
    name: 'Home',
    data () {
        authNotifier.on('authChange', authState => {
            this.authenticated = authState.authenticated
        })
        return {
            // name: 'Contacts',
            reachoutURL:
                "https://reachout-backend.herokuapp.com/user/",
            userData: [],
            auth,
            authenticated
        }
    },
    mounted() {
        fetch(this.reachoutURL, {
            method: "get",
            mode: "cors",
            headers: new Headers({ "Content-Type": "application/json" })
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp.user);
                this.userData = resp.user;
            });
    },
    methods: {
        login,
        logout 
    }
}
</script>

<style>
.home-container {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    background-image: url(http://genchi.info/image/united-states-flag-wallpaper-3.jpg);
    background-repeat: no-repeat;
    background-position: center; 
    width: 100vw;
    height: 100vh;
}
.logo-container {
    display: flex;
    justify-content: center;
}
.links {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-between;
    /* margin-top: 5vh; */
}
.user-image {
    width: 12vw;
    margin-top: 3vh;
    border: .1em solid black;
    box-shadow: .5em .5em .1em black; 
}
.links-link {
    margin-top: 5vh;
    text-decoration: none; 
    color: white;
    text-shadow: .15em .1em red;
    font-weight: bolder;
    letter-spacing: .1em;
}
.contacts-icon {
    height: 2vh;
}
.home-logo {
    width: 15vw;
}
.btn {
    width: 10vw;
}

</style>
