function hash(data) {
    data = String(data);
    let ordinal_vals = [];

    for (let i = 0; i < data.length; i++) {
        ordinal_vals[i] = data.charCodeAt(i);
    }

    let hex_val = parseInt(ordinal_vals.join(""), 16);
    return String(hex_val);
}