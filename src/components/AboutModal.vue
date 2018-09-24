<template>
        <!-- Modal Component -->
    <div>
        <b-modal id="about-modal" centered title="About Reachout" ok-only>
            <p name="" id="" cols="30" rows="10">Reach Out is an a real time application where veterans suffering from PTSD can reach out to supportive veterans within and outside their local communities.  ReachOut enables veterans to seek guidance, support and comradarie in hopes to learn how other veterans address, handle and reduce the psychological stress caused by combat PTSD. <br>
            Please feel free to use the chat room, post help markers to notify veterans if you feel suicidal as well as add veterans to your contact list.
            </p>
            <div slot="modal-footer" class="w-100">
                <b-button class="float-right" variant="danger" @click="hideModal">
                    Close
                </b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'AboutModal',
    methods: {
        hideModal () {
            this.$root.$emit('bv::hide::modal', 'about-modal');
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
