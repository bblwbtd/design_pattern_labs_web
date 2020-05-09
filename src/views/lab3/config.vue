<template>
    <v-col>
        <v-row>
            <v-col cols="12" md="7">
                <v-text-field
                        label="Max Floor"
                        v-model="max_floor"
                        class="pl-5 pr-5"
                >
                </v-text-field>
            </v-col>
            <v-col cols="12" md="7">
                <v-slider
                    min="1"
                    max="10"
                    v-model="door_speed"
                    label="Door Speed"
                    class="pl-5 pr-2"
                    hint="Small is faster"
                >

                </v-slider>
            </v-col>
            <v-col cols="12" md="7">
                <v-slider
                    min="1"
                    max="10"
                    v-model="elevator_speed"
                    label="Elevator Speed"
                    class="pl-5 pr-2"
                    hint="Small is faster"
                >

                </v-slider>
            </v-col>
            <v-col cols="12" md="7">
                <v-slider
                        min="1"
                        max="10"
                        v-model="door_idle_time"
                        label="Door Idle Time"
                        class="pl-5 pr-2"
                        hint="In second"
                >

                </v-slider>
            </v-col>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
            <v-btn class="mr-7 green white--text" @click="confirm">
                Confirm
            </v-btn>
        </v-row>
    </v-col>
</template>

<script>
    import {positive_integer} from "@/scripts/rules";
    import {new_elevator} from "@/scripts/lab3";

    export default {
        name: "config",
        data: () => ({
            max_floor: 9,
            floor_rules: [
                positive_integer
            ],
            door_speed: 3,
            elevator_speed: 3,
            door_idle_time: 5
        }),
        methods: {
            confirm(){
                new_elevator().then(result =>{
                    this.$emit("confirm", this.max_floor)
                })
            }
        }
    }
</script>

<style scoped>

</style>
