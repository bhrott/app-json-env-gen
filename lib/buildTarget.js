const merge = require('deepmerge')
const args = require('./args').current
const pathResolver = require('./pathResolver')

module.exports = function() {
    let configFileTree = []

    let primary = getConfigFile(args.target)
    configFileTree.push(primary)

    resolveConfigTree(configFileTree, primary)

    configFileTree.reverse()

    const configDataList = configFileTree.map(config => config.data)

    const result = merge.all(configDataList)

    return result
}

function resolveConfigTree(sourceList, configObj) {
    const from = configObj.meta.from

    if (from) {
        let nextConfig = getConfigFile(from)
        sourceList.push(nextConfig)
        resolveConfigTree(sourceList, nextConfig)
    }
}

function getConfigFile(target) {
    const path = pathResolver.forTarget(target)
    return require(path)
}
