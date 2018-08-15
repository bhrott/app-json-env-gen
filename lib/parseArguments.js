const ARG_KEYS = [
    /**
     * the directory with env files
     */
    'dir',

    /**
     * the file that be used as startup for the generator
     */
    'target',

    /**
     * the path of the file that be generated.
     */
    'output'
]

module.exports = function() {
    let args = process.argv.map(parseArg)
    args = filterValidArgs(args)

    let objArgs = {}

    args.forEach(arg => {
        objArgs[arg.key] = arg.value
    })

    return objArgs
}

function filterValidArgs(args) {
    return args.filter(arg => {
        return ARG_KEYS.includes(arg.key)
    })
}

function parseArg(arg) {
    const parts = arg.split('=')
    return {
        key: parts[0],
        value: parts[1]
    }
}
