const path = require('path')
const args = require('./args')
const { DEFAULT_FILE_EXT } = require('./constants')

module.exports = {
    get dir() {
        return path.resolve(args.current.dir)
    },

    get target() {
        return this.forTarget(args.current.target)
    },

    get output() {
        return path.resolve(args.current.output)
    },

    forTarget(target) {
        return path.resolve(this.dir, `${target}${DEFAULT_FILE_EXT}`)
    }
}
