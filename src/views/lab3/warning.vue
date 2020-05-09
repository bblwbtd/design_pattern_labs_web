<template>
    <v-dialog
        v-model="open"
        persistent
        max-width="310px"
    >
        <v-card>
            <v-card-title
                class="headline red--text"
            >
            Are you sure about that?
            </v-card-title>
            <v-card-text>
                It's extremely dangerous. You might get hurt!
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text color="red" @click="confirm">Continue</v-btn>
                <v-btn text color="green" @click="open = false">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "warning",
        methods: {
            confirm() {
                this.$emit("confirm")
                this.open = false
            }
        },
        data:() => ({
            open: false
        })
    }
</script>

<style scoped>

</style>
