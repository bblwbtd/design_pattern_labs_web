<template>
    <v-container fluid class="fill-height">
        <v-row justify="center" align="start">
            <lab1_form v-if="page === 'form'" @finish="show_result"></lab1_form>
            <lab1_result v-if="page === 'result'" @back="back" :result="result"></lab1_result>
        </v-row>
    </v-container>
</template>

<script>
    import Lab1_form from "@/views/lab1/form";
    import Lab1_result from "@/views/lab1/result";

    export default {
        name: "lab1",
        methods: {
            show_result(result){

                this.result = result
                this.page = "result"
            },
            back(){
                this.page = "form"
            }
        },
        components: {Lab1_result, Lab1_form},
        data: () => ({
            page: "form",
            result: null
        })
    }
</script>

<style scoped>

</style>
