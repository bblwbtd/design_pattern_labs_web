<template>
    <v-col>
        <v-row class="pr-2">
            <v-col cols="12" md="4">
                <div class="headline text-center">
                    Current Floor:
                </div>
                <div class="title text-center">
                     {{current_floor}}
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="headline text-center">
                    Door Status:
                </div>
                <div class="title text-center">
                    {{door_status}}
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="headline text-center">
                    Elevator Status:
                </div>
                <div class="title text-center">
                    {{elevator_status}}
                </div>
            </v-col>
            <v-col cols="12">
                <v-row class="pl-5" align-content="center">
                    <v-col cols="6" sm="3">
                        <v-btn class="white--text green" @click="open_door" block>
                            Open Door
                        </v-btn>
                    </v-col>
                    <v-col cols="6" sm="3">
                        <v-btn class="white--text orange" @click="close_door" block>
                            Close Door
                        </v-btn>
                    </v-col>
                    <v-col cols="12" sm="3">
                        <v-btn class="white--text red" block @click="show_warning">
                            Use hand to block the door
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-row class="pl-4">
                    <v-col v-for="i in floors" cols="4" sm="3" md="2">
                        <v-btn class='white--text' :color="i.color" @click="press_floor_button(i.floor)">
                            {{i.floor}}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <warning ref="warning" @confirm="block_door"></warning>
    </v-col>
</template>

<script>
    import {block_door, press_close_door_button, press_floor_button, press_open_door_button} from "@/scripts/lab3";
    import Warning from "@/views/lab3/warning";

    export default {
        name: "panel",
        components: {Warning},
        props: ['max_floor'],
        mounted(){
            for (let i = 1; i <= this.max_floor; i++){
                this.floors.push({
                    floor: i,
                    color: 'grey'
                })
            }
            this.initial_websocket()
        },
        methods: {
            initial_websocket(){
                console.log(`ws://${window.location.host}/api/lab3/ws1`)
                let ws = new WebSocket(`ws://${window.location.host}/api/lab3/ws`)
                ws.onmessage = this.receive_message
                ws.onerror = function (err) {
                    console.log(err)
                }
            },
            receive_message(message){
                console.log(message)
                let json = JSON.parse(message.data)
                switch (json.name) {
                    case "DoorOpenedEvent":
                        this.door_status = 'Opened'
                        break
                    case "ClosingDoorEvent":
                        this.door_status = 'Closing'
                        break
                    case "DoorClosedEvent":
                        this.door_status = 'Closed'
                        break
                    case "OpeningDoorEvent":
                        this.door_status = 'Opening'
                        break
                    case "MovingUpEvent":
                        this.elevator_status = 'Moving Up'
                        break
                    case "MovingDownEvent":
                        this.elevator_status = 'Moving Down'
                        break
                    case "ElevatorStopEvent":
                        this.elevator_status = "Stopped"
                        break
                    case "ReachedFloorEvent":
                        console.log(this.elevator_status)
                        if (this.elevator_status === "Moving Up"){
                            this.current_floor++;
                        } else if (this.elevator_status === "Moving Down"){
                            this.current_floor--;
                        }
                        this.floors[this.current_floor - 1].color = 'grey'
                        break
                }
            },
            press_floor_button(floor){
                let data = this.floors[floor - 1]
                if (data.color === 'grey' && this.current_floor !== data.floor){
                    data.color = 'pink'
                }
                press_floor_button(floor)
            },
            open_door(){
                press_open_door_button()
            },
            close_door(){
                press_close_door_button()
            },
            block_door(){
                block_door()
            },
            show_warning(){
                this.$refs.warning.open = true
            }
        },
        data: () => ({
            floors: [],
            current_floor: 1,
            door_status: 'Closed',
            elevator_status: 'Stopped',
        })
    }
</script>

<style scoped>

</style>
