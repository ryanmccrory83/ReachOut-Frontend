<template>
    <div class="notifications">
        <h1>NOTIFICATIONS</h1>
        <MapContainer />
        <div class="home-button-container">
            <a href="./home" class="map-home-button">HOME</a>
        </div>
        
    </div>
</template>

<script>

import MapContainer from '../components/MapContainer'
export default {
    name: 'Notifications',
    components: {
        MapContainer,
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
        height: 100vh;
    }
    h1 {
        color: red;
        font-weight: bolder;
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
        text-shadow: .1em .1em black;
        border: .1em solid blue;
        border-radius: .4em;
        background-color: blue;
        width: 10vw;
        padding: .2em;
        }
</style>
