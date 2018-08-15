const parseArguments = require('./parseArguments')

let currentArgs = null
let argumentSource = process.argv

module.exports = {
    get current() {
        if (!currentArgs) {
            currentArgs = parseArguments(argumentSource)
        }

        return currentArgs
    },

    useSource(source) {
        currentArgs = null
        argumentSource = source
    }
}
