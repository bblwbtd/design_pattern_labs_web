<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col
                    cols="12"
            >
                <v-row>
                    <v-col cols="12">
                        <div>
                            <div class="text-center display-4">
                                <div class="display-3">
                                    <span class="red--text">D</span>
                                    <span class="white--text">esign </span>
                                    <span class="red--text">P</span>
                                    <span class="white--text">attern </span>
                                    <span class="red--text">L</span>
                                    <span class="white--text">abs</span>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-btn class="light-green white--text mt-5" @click="open_drawer">Let's go</v-btn>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "index",
        methods: {
            open_drawer(){
                this.$emit("open_drawer")
            }
        },
        data: () => ({
            labs: [
                {
                    color: "colors.red",
                    name: "Lab1 Strategy"
                },
                {
                    color: "green",
                    name: "Lab2 Decorator"
                },
                {
                    color: "orange",
                    name: "Lab3 State"
                },
                {
                    color: "indigo",
                    name: "Lab4 Unknown"
                }

            ]
        })
    }
</script>

<style scoped>
    @import "../css/common.css";
</style>
