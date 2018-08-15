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

const REQUIRED_ARG_KEYS = ['dir', 'target', 'output']

module.exports = function(commandArgs) {
    let args = commandArgs.map(parseArg)
    args = filterValidArgs(args)

    let objArgs = {}

    args.forEach(arg => {
        objArgs[arg.key] = arg.value
    })

    validateArgs(objArgs)

    return objArgs
}

function validateArgs(objArgs) {
    REQUIRED_ARG_KEYS.forEach(reqArg => {
        if (!Object.keys(objArgs).includes(reqArg)) {
            throw new Error(`ERROR: The argument '${reqArg}' is required.`)
        }
    })
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
