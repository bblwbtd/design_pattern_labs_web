export function not_empty(v) {
    if (!v) {
        return "Please input a value."
    }
    return true
}

export function positive_number(v) {
    if (/^\d+$/.test(v) === false && /^\d+(\.\d+)?$/.test(v) === false) {
        return "Please input a positive number."
    }
    return true
}

export function positive_integer(v) {
    if (!/^\d+$/.test(v)) {
        return "Please input a positive integer."
    }
    return true
}
