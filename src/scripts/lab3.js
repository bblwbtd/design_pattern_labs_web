import {axios} from "@/scripts/client";

export function new_elevator(elevator_speed, door_speed, max_floor, idle_time) {
    return axios.post("/api/lab3/init", {
        'elevator_speed': elevator_speed,
        'door_speed': door_speed,
        'max_floor': max_floor,
        'door_max_idle_time': idle_time
    })
}

export function press_floor_button(floor) {
    return axios.post("/api/lab3/floor_button/press", {
        'floor': floor
    })
}

export function press_open_door_button() {
    return axios.post("/api/lab3/open")
}

export function press_close_door_button() {
    return axios.post("/api/lab3/close")
}

export function block_door() {
    return axios.post("/api/lab3/block")
}
