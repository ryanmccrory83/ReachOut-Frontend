<template>
    <div class="notifications">
        <h1 class="notifications-h1">NOTIFICATIONS</h1>
        <div class="msg_list">
            <p class="notification-location-p" @click="toggleMap"> DistressedVet needs help! <img src="http://prtlimages.cunamutual.com/ImageServer/Portal/B2B/CollapseSign.gif"></p>
                <!-- <div class="result-location"> -->
            <router-link tag="li" to="/Chats" class="notify-map-anchor"> <img src="../assets/map-location.png" alt="" v-if="isOpen" class="notify-map"></router-link>
        </div>
        <MapContainer />
        <div class="home-button-container">
            <a href="./home" class="map-home-button">HOME</a>
        </div>
        
    </div>
</template>

<script>

import MapContainer from "../components/MapContainer"
export default {
    name: "Notifications",
    components: {
        MapContainer,
    },
    data() {
        return {
            isOpen: false
            } 
        },
    methods: {

        toggleMap: function(){
            console.log(this.isOpen)
            this.isOpen = !this.isOpen
            console.log(this.isOpen)
        }
    }
}
</script>

<style>
.notifications {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-image: url(http://genchi.info/image/united-states-flag-wallpaper-3.jpg);
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 110vh;
}
.notifications-h1 {
  color: red !important;
  font-weight: bolder;
  position: relative;
}

.home-button-container {
  display: flex;
  justify-content: center;
}
.map-home-button {
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bolder;
  text-shadow: 0.1em 0.1em black;
  border: 0.1em solid blue;
  border-radius: 0.4em;
  background-color: blue;
  width: 10vw;
  padding: 0.2em;
}

.msg_list {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin: 0px;
    padding: 0px;
    width: 45%;
    height: 35%;
}
.notification-location-p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: red !important;
    padding: 5px 10px;
    cursor: pointer;
    position: fixed;
    background-color:#FFCDDD;
    margin:1px;
    width: 26.5%;
    height: 5%;
}

.notify-map-anchor {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 85%;
}
.notify-map {
    height: 100%;
    width: 69%;
}
</style>
