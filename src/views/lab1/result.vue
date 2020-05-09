<template>
    <v-col cols="10">
        <div class="headline white--text">
            Calculation Report
        </div>
        <v-card class="mt-5">
            <v-card>
                <v-card-text class="black--text">
                    <div class="d-flex align-baseline">
                        <v-btn icon class="align-self-start">
                            <v-icon v-if="index !== 0" @click="last_month">mdi-arrow-left</v-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <div class="text-center title" >{{result[index].thisMonth}}</div>
                        <v-spacer></v-spacer>
                        <v-btn icon class="align-self-end">
                            <v-icon v-if="index !== result.length - 1" @click="next_month">mdi-arrow-right</v-icon>
                        </v-btn>
                    </div>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-row align="center" justify="center">
                                <div class="title black--text">Redemption</div>
                            </v-row>
                            <v-row align="center" justify="center">
                                <div class="display-1">
                                    {{result[index].redemption}}
                                </div>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row align="center" justify="center">
                                <div class="title black--text">Amount still outstanding</div>
                            </v-row>
                            <v-row align="center" justify="center">
                                <div class="display-1">
                                    {{result[index].rest}}
                                </div>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row align="center" justify="center">
                                <div class="title black--text">Interest</div>
                            </v-row>
                            <v-row align="center" justify="center">
                                <div class="display-1">
                                    {{result[index].interest}}
                                </div>
                            </v-row>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                            <v-row align="center" justify="center">
                                <div class="title black--text">Remaining months</div>
                            </v-row>
                            <v-row align="center" justify="center">
                                <div class="display-1">
                                    {{result[index].remainMonth}}
                                </div>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row justify="center" align="center">
                        <v-col cols="12" md="6">
                            <v-btn block class="light-green white--text" @click="$emit('back')">back</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-card>
    </v-col>
</template>

<script>
    export default {
        name: "lab1_result",
        props: ['result'],
        methods: {
            last_month() {
                if (this.index > 0) {
                    this.index--
                }
            },
            next_month() {
                if (this.index < this.result.length - 1) {
                    this.index++
                }
            }
        },
        data: () => ({
            index: 0,
            current_month: {}
        })
    }
</script>

<style scoped>

</style>
