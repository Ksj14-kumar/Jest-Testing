const axios = require("axios")

module.exports.add = (n1, n2) => {
    return n1 + n2
}


module.exports.sub = (n1, n2) => {
    return n1 - n2
}

module.exports.mul = (n1, n2) => {
    return n1 * n2
}

module.exports.div = (n1, n2) => {
    return n1 / n2
}

module.exports.getData = async function() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users/1")

        return res.data


    } catch (err) {

        return err
    }
}