const fs = require('fs')
const pathResolver = require('./pathResolver')

module.exports = function(envContentData) {
    fs.writeFileSync(
        pathResolver.output,
        JSON.stringify(envContentData, null, 2)
    )

    console.log(`Env file generated in ${pathResolver.output}`)
}
