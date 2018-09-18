<template>
    <div class="reachout">
        <section class="reachout-section">
            <img src="../assets/ReachOutLogo.png" alt="" class="logo">
            <a href="./Chats" class="deploy-button">Deploy</a>
        </section>
        <div class="go-back-button">
            <a href="./home" class="go-back">Go Back</a>
        </div>
    </div>
        
</template>

<script>
export default {
    name: 'Deploy'
}
</script>

<style>
.logo {
    width: 15vw;
}
    .reachout {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        background-image: url(http://genchi.info/image/united-states-flag-wallpaper-3.jpg);
        background-repeat: no-repeat;
        background-position: center; 
        width: 100vw;
        height: 100vh;
    }
    .reachout-h1 {
        color: red;
        text-shadow: .1em .1em black;
    }
    .reachout-section {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        margin-top: 5em;
        /* width: 10vw; */
    }
    .deploy-button {
        border: .3em solid black;
        border-radius: 50%;
        padding: 2.5em 1.6em;
        margin-top: 5em;
        text-decoration: none;
        color: black;
        font-weight: bolder;
        background-color: red;
        animation-name: flash;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        //Firefox 1+
        -webkit-animation-name: flash;
        -webkit-animation-duration: 2s;
        -webkit-animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;

        //Safari 3-4
        -moz-animation-name: flash;
        -moz-animation-duration: 2s;
        -moz-animation-timing-function: linear;
        -moz-animation-iteration-count: infinite;
    }

    @keyframes flash {  
        0% { opacity: 1.0; }
        50% { opacity: 0.5; }
        100% { opacity: 1.0; }
    }

    //Firefox 1+
    @-webkit-keyframes flash {  
        0% { opacity: 1.0; }
        50% { opacity: 0.5; }
        100% { opacity: 1.0; }
    }

    //Safari 3-4
    @-moz-keyframes flash {  
        0% { opacity: 1.0; }
        50% { opacity: 0.5; }
        100% { opacity: 1.0; }
    }
    .go-back-button {
        display: flex;
        margin-top: 2em;
    }
    .go-back {
        /* border: 1px solid black; */
    border-radius: 5em;
    margin: 5em 2em 2em 2em;
    padding: 1em 1em 1em 1em;
    text-decoration: none;
    background-image: radial-gradient(white, grey);
    /* background-color: white; */
    color: black;
    font-weight: bolder;
    box-shadow: .5em .5em .1em black;
    }
</style>
