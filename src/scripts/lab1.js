import {axios} from "@/scripts/client";

export function get_available_strategies() {
    return [
        "Linear",
        "Annuitized"
    ]
}


export function preform_calculation(strategy, interest_rate, initial_amount, start_date, end_date) {
    return axios.post("/api/lab1/calculate", {
        "strategy": strategy,
        "interest_rate": interest_rate,
        "initial_amount": initial_amount,
        "start_date": start_date,
        "end_date": end_date
    })
}
