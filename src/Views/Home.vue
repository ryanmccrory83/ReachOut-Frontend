<template>
    <div class="home-container">
        <div class="logo-container">
            <img src="../assets/ReachOutLogo.png" class="home-logo" alt="">
        </div>
        <div class="links">
            <img src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/17966271_10209963583900817_8300406579102339175_o.jpg?_nc_cat=0&oh=ceb7c33ed49d44974433849172d7c186&oe=5C14E04B" alt="Username" class="user-image">
            <a href="" class="links-link">NOTIFICATIONS</a>
            <a href="" class="links-link">CONTACTS</a>
            <a href="./Deploy" class="links-link">REACHOUT</a>
            <button type="submit" class="log-out-button" href="./Login">Log Out</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Home'
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
    margin-top: 5vh;
}
.user-image {
    width: 10vw;
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
.home-logo {
    width: 15vw;
}
.log-out-button {
    height: 5vh;
    width: 10vw;
    margin-top: 5vh;
    box-shadow: .5em .5em .1em black;
    border-radius: 5em;
    background-image: radial-gradient(white, blue);
}

</style>
