<template>
    <div>
        <ul class="user-list" v-for="user in userData" v-bind:key= "user.id" >
            <li class="user-li-name">{{ user.first_name + ' ' + user.last_name }}</li>
            <li class="user-li-img">{{ user.image_url }}</li>
            <li class="user-li-branch">{{ user.military_branch }}</li>
        </ul>
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
            userData: null,
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
                this.userData = resp.users;
                console.log(resp);
            });
    },
}
</script>

<style>
.user-list {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
}
.user-li-name {
    color: black;
    font-weight: bolder;
}
.user-li-img {
    height: 5vh;
    border: .2em solid black;
}
.user-li-branch {
    color: red;
    font-weight: bold;
}
</style>
