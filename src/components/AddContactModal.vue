<template>
        <!-- Modal Component -->
    <div>
        <b-modal id="contact-modal" centered title="Add Contact" ok-only>
            <form @submit="submit">
                <input type="text" name="username" id="">
                <b-btn type="submit">Save Contact</b-btn>
            </form>
            <div slot="modal-footer" class="w-100">
                <b-btn class="float-right" variant="danger" @click="hideModal">
                    Close
                </b-btn>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'AddContactModal',
    methods: {
        hideModal () {
            this.$root.$emit('bv::hide::modal', 'contact-modal');
        }
    }
}
</script>

<style>
#contact-modal{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    background-color: white;
    border: .1em solid black;
}
</style>
