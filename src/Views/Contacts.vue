<template>
        <div class="contacts"><span>
            <h1>Contacts</h1>
            <div>
                <ul class="user-list" v-for="user in userData" v-bind:key= "user.id" >
                    <li class="user">
                        <img class="user-img" :src= 'user.image_url' alt="">
                        <h3 class="user-name">{{ user.first_name }} {{ user.last_name }}</h3>
                        <h4 class="user-branch">{{ user.military_branch }}</h4>
                    </li>  
                </ul>
            </div>
            <div>
            <a class="contacts-home" href="./home">HOME</a>
            </div>
        </span></div>
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
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    overflow-y: scroll;
}
h1 {
    display: flex;
    justify-content: center;
    font-size: 4em;
    margin-bottom: 3vh;
    color: red;
    text-shadow: .1em .1em black;
}
.user-list {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    align-items: flex-start;
    list-style: none;
    width: 30vw;
    margin-left: -6vw;
}
.user {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 30vw;
    padding: 1em;
    background-color: rgb(220, 220, 220, 0.7);
}
.user-img {
    height: 15vh;
    width: 8vw;
    border: .2em solid black;
    margin-right: 3em;
}
.user-name {
    color: black;
    font-weight: bolder;
    margin-right: 2em;
}
.user-branch {
    color: red;
    font-weight: bold;
}
.contacts-home {
    color: red;
    font-weight: bolder;
    text-shadow: .1em .1em black;
}
</style>
