#!/usr/bin/env node

try {
    const args = require('./lib/args')
    args.useSource(process.argv.slice(2))

    const buildTarget = require('./lib/buildTarget')
    const writeTarget = require('./lib/writeTarget')
    const result = buildTarget()
    writeTarget(result)
    console.log('Done!')
} catch (error) {
    console.error(error.message)
}
