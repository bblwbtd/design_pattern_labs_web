<template>
    <v-col sm="10" md="6">
        <v-row>
            <v-col cols="12">
                <div class="headline white--text">
                    Strategy pattern example -- Mortgages
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-row>
                        <v-col cols="12">
                            <v-form ref="input_form">
                                <v-row>
                                    <v-col cols="12" lg="7">
                                        <v-select
                                                class="pl-5 pr-5"
                                                :items="strategies"
                                                label="Strategy"
                                                v-model="strategy"
                                                :rules="[v => !!v || 'Please select a strategy.']"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" lg="7">
                                        <v-text-field
                                                v-model="interest_rate"
                                                label="Interest rate"
                                                class="pl-5 pr-5"
                                                :rules="interest_rate_rules"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" lg="7">
                                        <v-text-field
                                                v-model="initial_amount"
                                                label="Initial amount"
                                                class="pl-5 pr-5"
                                                :rules="initial_amount_rules"
                                        >
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" lg="7">
                                        <v-menu
                                                ref="start_date"
                                                v-model="start_date_picker"
                                                :close-on-content-click="false"
                                                :return-value.sync="start_date"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                        v-model="start_date"
                                                        label="start date"
                                                        readonly
                                                        prepend-icon="mdi-calendar"
                                                        v-on="on"
                                                        class="pl-4 pr-5"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker v-model="start_date" no-title scrollable type="month">
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="start_date_picker = false">Cancel
                                                </v-btn>
                                                <v-btn text color="primary" @click="$refs.start_date.save(start_date)">OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" lg="7">
                                        <v-menu
                                                ref="end_date"
                                                v-model="end_date_picker"
                                                :close-on-content-click="false"
                                                :return-value.sync="end_date"
                                                transition="scale-transition"
                                                offset-y
                                                min-width="290px"
                                        >
                                            <template v-slot:activator="{ on }">
                                                <v-text-field
                                                        v-model="end_date"
                                                        label="end date"
                                                        readonly
                                                        prepend-icon="mdi-calendar"
                                                        v-on="on"
                                                        class="pl-4 pr-5"
                                                ></v-text-field>
                                            </template>
                                            <v-date-picker v-model="end_date" no-title scrollable type="month">
                                                <v-spacer></v-spacer>
                                                <v-btn text color="primary" @click="end_date_picker = false">Cancel
                                                </v-btn>
                                                <v-btn text color="primary" @click="$refs.end_date.save(end_date)">OK
                                                </v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                                <div class="float-right">
                                    <v-btn class="green white--text float-right mr-3" @click="calculate">
                                        Calculate
                                    </v-btn>
                                    <v-btn class="orange white--text float-right mr-3" @click="reset">
                                        Reset
                                    </v-btn>
                                </div>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-col>
</template>

<script>
    import {get_available_strategies, preform_calculation} from "@/scripts/lab1";
    import {positive_number} from "@/scripts/rules";

    export default {
        name: "lab1_form",
        methods: {
            validate() {
                return this.$refs.input_form.validate()
            },
            reset() {
                this.$refs.input_form.reset()
            },
            calculate() {
                if (!this.validate()) return
                preform_calculation(this.strategy, this.interest_rate, this.initial_amount, this.start_date, this.end_date)
                    .then(result => {
                        this.$emit("finish", result.data.data.result)
                    })
            }
        },
        data: () => ({
            strategies: get_available_strategies(),
            strategy: null,
            interest_rate: null,
            initial_amount: null,
            start_date_picker: false,
            end_date_picker: false,
            start_date: new Date().toISOString().substr(0, 7),
            end_date: new Date(new Date().valueOf() + 24 * 60 * 60 * 1000 * 365).toISOString().substr(0, 7),
            interest_rate_rules: [
                positive_number
            ],
            initial_amount_rules: [
                positive_number
            ]
        })
    }
</script>

<style scoped>

</style>
