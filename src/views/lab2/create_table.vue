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
                <v-text-field
                        label="Column Number"
                        v-model="col"
                        class="pl-5 pr-5"
                        :rules="col_rules"
                >

                </v-text-field>
            </v-col>
        </v-row>
    </v-form>

</template>

<script>
    import {not_empty, positive_integer} from "@/scripts/rules";

    export default {
        name: "create_table",
        methods: {
            validate(){
                return this.$refs.form.validate()
            }
        },
        data: () => ({
            table_name: "",
            col: 1,
            table_name_rules: [
                not_empty
            ],
            col_rules: [
                positive_integer
            ]
        })
    }
</script>

<style scoped>

</style>
