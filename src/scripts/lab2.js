import {axios} from "@/scripts/client";

export function getLogs() {
    return axios.get("/api/lab2/logs")
}

export function create_db_table(table_name, col) {
    return axios.post("/api/lab2/create", {
        "table_name": table_name,
        "col": col
    })
}

export function insert_db_row(table_name, data) {
    return axios.post("/api/lab2/insert", {
        "table_name": table_name,
        "data": data
    })
}

export function select_db_row(table_name, col, selector) {
    return axios.post("/api/lab2/select", {
        "table_name": table_name,
        "col": col,
        "select": selector
    })
}

export function join_db_table(tab1_name, tab2_name, tab1_col, tab2_col) {
    return axios.post("/api/lab2/join", {
        "tab1_name": tab1_name,
        "tab2_name": tab2_name,
        "tab1_col": tab1_col,
        "tab2_col": tab2_col
    })
}

export function clear_log() {
    return axios.post("/api/lab2/logs/clear")
}
