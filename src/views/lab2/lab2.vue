<template>
    <v-container fluid class="fill-height">
        <v-row justify="center" align="start">
            <v-col sm="10" md="6">
                <v-row>
                    <v-col cols="12">
                        <div class="headline white--text">
                            Decorator pattern example -- Database Logs
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-row>
                                <v-col cols="12">
                                    <v-select v-model="selected_operation" class="pl-5 pr-5" :items="operations"
                                              label="Operations">

                                    </v-select>

                                    <create_table ref="create_table_form" v-if="selected_operation === 'Create Table'"></create_table>
                                    <insert_row ref="insert_row_form" v-if="selected_operation === 'Insert Row'"></insert_row>
                                    <select_row ref="select_row_form" v-if="selected_operation === 'Select Row'"></select_row>
                                    <join_table ref="join_table_form" v-if="selected_operation === 'Join Table'"></join_table>

                                    <v-row class="mr-5">
                                        <v-spacer></v-spacer>
                                        <v-btn class="white--text green" @click="execute">Execute</v-btn>
                                    </v-row>
                                </v-col>
                                <v-col cols="12" class="fill-height pl-7 pr-7">
                                    <v-textarea class="fill-height pt-5"
                                                v-model="logs"
                                                outlined
                                                label="logs"
                                                readonly
                                                no-resize
                                                clearable
                                                height="200px"
                                                @click:clear="clear"
                                    ></v-textarea>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Create_table from "@/views/lab2/create_table";
    import {clear_log, create_db_table, getLogs, insert_db_row, join_db_table, select_db_row} from "@/scripts/lab2";
    import Insert_row from "@/views/lab2/insert_row";
    import Select_row from "@/views/lab2/select_row";
    import Join_table from "@/views/lab2/join_table";


    export default {
        name: "lab2",
        components: {Join_table, Select_row, Insert_row, Create_table},
        methods: {
            clear(){
                clear_log().then(_ => {
                    this.logs = ""
                })
            },
            update_logs(){
                getLogs().then(result => {
                    this.logs = result.data.data.join("\n")
                })
            },
            execute(){
                switch (this.selected_operation) {
                    case "Create Table":
                        let form1 = this.$refs.create_table_form
                        if (!form1.validate()){
                            return
                        }
                        create_db_table(form1.table_name, form1.col).then(_ => {
                            this.update_logs()
                        })
                        break
                    case "Insert Row":
                        let form2 = this.$refs.insert_row_form
                        if (!form2.validate()){
                            return;
                        }
                        insert_db_row(form2.table_name, form2.data.split("\n")).then(_ => {
                            this.update_logs()
                        })
                        break
                    case "Join Table":
                        let form3 = this.$refs.join_table_form
                        if (!form3.validate()){
                            return;
                        }
                        join_db_table(form3.tab1_name, form3.tab2_name, form3.tab1_col, form3.tab2_col).then(_ => {
                            this.update_logs()
                        })
                        break
                    case "Select Row":
                        let form4 = this.$refs.select_row_form
                        if (!form4.valueOf()){
                            return;
                        }
                        select_db_row(form4.table_name, form4.col, form4.select).then(_ =>{
                            this.update_logs()
                        })
                }
            }
        },
        data: () => ({
            operations: [
                "Create Table",
                "Insert Row",
                "Select Row",
                "Join Table",
            ],
            selected_operation: "Create Table",
            logs: ""
        }),
        mounted(){
            this.update_logs()
        }
    }
</script>

<style scoped>

</style>
