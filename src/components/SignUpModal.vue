<template>
        <!-- Modal Component -->
    <div>
        <b-modal id="signup-modal" centered title="Add User Information" ok-only>
            <form @submit="onSubmit">
                <div>
                    <label for="username">Username</label>
                    <input v-model="form.username" type="text" name="username" id="username" value="">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input v-model="form.password" type="text" name="password" id="password" value="">
                </div>
                <div>
                    <label for="email">Email Address</label>
                    <input type="text" name="email" id="email" value="">
                </div>
                <div>
                    <label for="first-name">First Name</label>
                    <input type="text" name="first-name" id="first-name" value="">
                </div>
                <div>
                    <label for="last-name">Last Name</label>
                    <input type="text" name="last-name" id="last-name" value="">
                </div>
                <div>
                    <label for="user-image">User Image</label>
                    <input type="text" name="user-image" id="user-image" value="">
                </div>
                <div>
                    <label for="military-branch">Military Branch</label>
                    <input type="text" name="military-branch" id="military-branch" value="">
                </div>
                <div slot="modal-footer" class="w-100">
                    <b-btn type="submit">Sign Up</b-btn>
                    <b-btn class="float-right" variant="danger" @click="hideModal">
                        Close
                    </b-btn>
                    <p class="message"></p>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'SignUpModal',
    data() {
        return {
            reachoutURL: "https://reachout-backend.herokuapp.com/user/",
            form: {
                username: "",
                password: "",
                email: "",
                first_name: "",
                last_name: "",
                image_url: "",
                military_branch: "",
            }
        };
    },
    methods: {
        onSubmit(evt) {
            this.form.username = this.$route.query.username;
            evt.preventDefault();
            console.log(this.form);
            console.log(Object.values(this.form));
            return fetch(this.reachoutURL, {
                method: "post",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(this.form)
            })
                .then(console.log(this.form))
                .then(resp => {
                    console.log(resp);
                    if (!resp.ok) {
                        if (resp.status >= 400 || resp.status < 500) {
                            return resp.json().then(data => {
                                const err = { errorMessage: data.message };
                                throw err;
                            });
                        }
                        const err = { errorMessage: "Failed to create user profile" };
                        throw err;
                    }
                    let message = document.querySelector('.message');
                    message.textContent = "You've successfully signed up for ReachOut!";
                    setTimeout(() => {
                        message.textContent = "";
                    }, 4000);
                    return resp.json();
                });
        },
        showModal () {
            this.$refs.myModalRef.show()
        },
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