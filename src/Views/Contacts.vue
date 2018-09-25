<template>
        <div class="contacts">
            <h1 class="contacts-h1">Contacts</h1>
            <div class="user-container">
                <ul class="user-list" v-for="user in userData" v-bind:key= "user.id" >
                    <li class="user">
                        <img class="user-img" :src= 'user.image_url' alt="">
                        <h3 class="user-name">{{ user.first_name }} {{ user.last_name }}</h3>
                        <img class="user-branch" v-if="user.military_branch==='Army'" src="../assets/army-logo.png"/>
                        <img class="user-branch" v-if="user.military_branch==='Navy'" src="../assets/navy-logo.png"/>
                        <img class="user-branch" v-if="user.military_branch==='Air Force'" src="../assets/airforce-logo.png"/>
                        <img class="user-branch" v-if="user.military_branch==='Coast Guard'" src="../assets/coast-guard-logo.png"/>
                        <img class="user-branch" v-if="user.military_branch==='Marines'" src="../assets/usmc-logo.png"/>
                    </li>  
                </ul>
            </div>
            <div class="home-button-container">
            <a class="contacts-home" href="./home">HOME</a>
            </div>
        </div>
</template>

<script>


export default {
    name: 'Contacts',
    data () {
        return {
            // name: 'Contacts',
            reachoutURL:
                "https://reachout-backend.herokuapp.com/user/",
            userData: [],
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
                console.log(resp);
                this.userData = resp.user;
            });
    },
    methods: {
        // branchOfService() => {
        //     return {
        //         if({{user.military_branch}} === Army){
        //             h4.color === Tan
        //             };
        //     }
        // }
    }
}
</script>

<style>
.contacts {
    background-image: url(http://genchi.info/image/united-states-flag-wallpaper-3.jpg);
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
}
.contacts-h1 {
    display: flex;
    justify-content: center;
    font-size: 4em;
    margin: 0vh 0vw 2vh 0vw;
    color: red !important;
    text-shadow: .1em .1em black;
}
.user-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 80vh;
    width: 100vw;
    overflow-y: scroll;
    margin: -1vh 0vw 0vw 10vw;
}
.user-list {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    align-items: flex-start;
    list-style: none;
    width: 40vw;
    margin-left: -6vw;
}
.user {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30vw;
    padding: .6em;
    background-color: rgb(220, 220, 220, 0.7);
}
.user-img {
    height: 15vh;
    width: 33%;
    border: .2em solid black;
    margin-right: 1em;
}
.user-name {
    width: 33%;
    color: black;
    font-weight: bolder;
    margin-right: 1em;
}
.user-branch {
    color: red;
    font-weight: bold;
    width: 33%;
}
.home-button-container {
    display: flex;
    justify-content: center;
    margin-top: 2vh;
    margin-bottom: -4vh;
}
.contacts-home {
    display: flex;
    justify-content: center;
    color: white;
    font-weight: bolder;
    text-shadow: .1em .1em black;
    border: .1em solid blue;
    border-radius: .4em;
    background-color: blue;
    width: 10vw;
    padding: .2em;

}
</style>
