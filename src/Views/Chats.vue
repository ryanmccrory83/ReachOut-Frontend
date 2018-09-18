<template>
    <div class="chats">
        <div class="back-to-home-container">
            <a href="./Home" class="back-to-home">Back to Home</a>
        </div>
        <textarea class="message-board">
            ryanmccrory83: Hello!
            user02: Hi!
        </textarea>
        <button type="submit" class="contact-button">Add Contact</button>
        <MapContainer />
    </div>
</template>

<script>
import MapContainer from '../components/MapContainer.vue'
export default {
    name: 'Chats',
    components: {
        MapContainer
    }
}
</script>

<style>
.back-to-home-container {
    margin-top: 2vh;
}
.back-to-home {
    text-decoration: none;
    font-weight: bolder;
    color: white;
}
.chats {
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    background-image: url(http://genchi.info/image/united-states-flag-wallpaper-3.jpg);
    background-repeat: no-repeat;
    background-position: center; 
    width: 100vw;
    height: 100vh;
}
.message-board {
    display: flex;
    flex-flow: column wrap;
    border: .1em solid black;
    height: 40vh;
    width: 30vw;
    justify-content: center;
}
.contact-button {
    margin: 2vh 0vw 2vh 10vw;
    justify-content: center;
    border:.1em solid black;
    border-radius: 1em;
    padding: .5em .5em;
    width: 10vw;
}
</style>
