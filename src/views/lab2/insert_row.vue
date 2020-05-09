<template>
    <v-form ref="form">
        <v-row>
            <v-col cols="12">
                <v-text-field
                        label="Table Name"
                        v-model="table_name"
                        class="pl-5 pr-5"
                        :rules="table_name_rules"
                >

                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea
                        v-model="data"
                        label="Data"
                        outlined
                        clearable
                        no-resize
                        class="pl-5 pr-5"
                >

                </v-textarea>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
    import {not_empty, positive_integer} from "@/scripts/rules";

    export default {
        name: "insert_row",
        methods: {
            validate(){
                return this.$refs.form.validate()
            }
        },
        data: () => ({
            table_name: '',
            data: '',
            table_name_rules: [
                not_empty
            ]
        })
    }
</script>

<style scoped>

</style>
