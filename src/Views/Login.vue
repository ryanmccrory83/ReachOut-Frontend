<template>
    <div class="login-screen">
        <div class="login">
            <img src="../assets/ReachOutLogo.png" alt="" class="login-logo">
            <h1 class="login-h1">Welcome to ReachOut</h1>
            <div class="login-buttons">
                <a href="" class="login-button">Login</a>
                <a href="" class="sign-in-button">Sign In</a>
            </div>
            
        </div>
        
    </div>
    

</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
        msg: 'Welcome to Your Vue.js App'
        };
    }
};
</script>

<style>
.login-screen {
    background-image: url(http://genchi.info/image/united-states-flag-wallpaper-3.jpg);
    background-repeat: no-repeat;
    background-position: center; 
    width: 100vw;
    height: 100vh;
}
.login {
    display:flex;
    flex-flow: column wrap;
    align-items: center;
}
.login-logo {
    width: 10vw;
}
.login-h1 {
    color: blue;
    text-shadow: .1em .1em white;
}
.login-buttons {
    display: flex;
    flex-flow: column wrap;
    align-items: space-between;
    font-weight: bolder;
}
.login-button {
    border: 1px solid black;
    border-radius: 1em;
    margin: 2em 2em 2em 2em;
    padding: 1em 1em 1em 1em;
    text-decoration: none;
    background-color: white;
    color: red;
}
.sign-in-button {
    border: 1px solid black;
    border-radius: 1em;
    margin: 2em 2em 2em 2em;
    padding: 1em 1em 1em 1em;
    text-decoration: none;
    background-color: white;
    color: red;
}
</style>
