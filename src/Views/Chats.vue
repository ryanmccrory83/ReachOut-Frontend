<template>
    <div class="chats">
        <div class="back-to-home-container">
            <a href="./Home" class="back-to-home">Back to Home</a>
        </div>
        <ChatGroup />
        <b-button v-b-modal.contact-modal class="btn btn-primary">Add Contact</b-button>
        <!-- <MapContainer /> -->
        <AddContactModal />
    </div>
</template>

<script>

import ChatGroup from '../components/ChatGroup.vue'
// import MapContainer from '../components/MapContainer.vue'
import AddContactModal from '../components/AddContactModal'
export default {
    name: 'Chats',
    components: {
        ChatGroup,
        // MapContainer,
        AddContactModal
    },
    methods: {
        showModal () {
            this.$refs.myModalRef.show()
        }
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
    height: 30vh;
    width: 40vw;
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
