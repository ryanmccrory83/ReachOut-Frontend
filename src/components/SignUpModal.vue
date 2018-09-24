<template>
        <!-- Modal Component -->
    <div>
        <b-modal id="signup-modal" centered title="Add User Information" ok-only>
            <form @submit="submit">
                <div>
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="text" name="password" id="password">
                </div>
                <div>
                    <label for="email">Email Address</label>
                    <input type="text" name="email" id="email">
                </div>
                <div>
                    <label for="first-name">First Name</label>
                    <input type="text" name="first-name" id="first-name">
                </div>
                <div>
                    <label for="last-name">Last Name</label>
                    <input type="text" name="last-name" id="last-name">
                </div>
                <div>
                    <label for="user-image">User Image</label>
                    <input type="text" name="user-image" id="user-image">
                </div>
                <div>
                    <label for="military-branch">Military Branch</label>
                    <input type="text" name="military-branch" id="military-branch">
                </div>
            </form>
            <div slot="modal-footer" class="w-100">
                <b-btn type="submit">Sign Up</b-btn>
                <b-btn class="float-right" variant="danger" @click="hideModal">
                    Close
                </b-btn>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'SignUpModal',
    methods: {
        hideModal () {
            this.$root.$emit('bv::hide::modal', 'signup-modal');
        }
    }
}
</script>

<style>
#signup-modal{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: white;
    border: .1em solid black;
}
</style>