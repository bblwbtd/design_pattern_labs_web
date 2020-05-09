<template>
    <v-form ref="form">
        <v-row>
            <v-col cols="12">
                <v-text-field
                        label="Table1 Name"
                        v-model="tab1_name"
                        class="pl-5 pr-5"
                        :rules="table_name_rules"
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field
                        label="Table2 Name"
                        v-model="tab2_name"
                        class="pr-5 pl-5"
                        :rules="table_name_rules"
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field
                        label="Table1 Column"
                        v-model="tab1_col"
                        class="pr-5 pl-5"
                        :rules="col_rules"
                >
                </v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field
                        label="Table2 Column"
                        v-model="tab2_col"
                        class="pr-5 pl-5"
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
        name: "join_table",
        methods: {
            validate() {
                return this.$refs.form.validate()
            }
        },
        data: () => ({
            tab1_name: '',
            tab2_name: '',
            tab1_col: 0,
            tab2_col: 0,
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
