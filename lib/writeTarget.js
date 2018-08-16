const fs = require('fs')
const path = require('path')
const pathResolver = require('./pathResolver')

module.exports = function(envContentData) {
    fs.writeFileSync(pathResolver.output, getFormatedContent(envContentData))
    console.log(`Env file generated in ${pathResolver.output}`)
}

function getFormatedContent(envContentData) {
    const extension = path.extname(pathResolver.output)

    console.log(extension)

    if (extension === '.js') {
        return `module.exports = ${JSON.stringify(envContentData, null, 2)}`
    } else if (extension === '.json') {
        return JSON.stringify(envContentData, null, 2)
    } else {
        throw new Error('ERROR: invalid output file extension.')
    }
}
