<template>
    <div class="notifications">
        <h1>NOTIFICATIONS</h1>
        <MapContainer />
        <a href="./home">HOME</a>
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
    a {
       align-items: center; 
       color: red;
       font-weight: bolder;
    }
</style>
