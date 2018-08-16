const parseArguments = require('../lib/parseArguments')
const constants = require('../lib/constants')

test('valid arguments return an object', () => {
    const commandArgs = ['dir=./envs', 'target=qa', 'output=./my-env.json']

    const expected = JSON.stringify({
        dir: './envs',
        target: 'qa',
        output: './my-env.json'
    })
    const received = JSON.stringify(parseArguments(commandArgs))

    expect(received).toBe(expected)
})

test('not inform target throws an error', () => {
    expect(() => {
        const commandArgs = ['dir=./envs', 'output=./my-env.json']
        parseArguments(commandArgs)
    }).toThrow()
})

test('not inform output throws an error', () => {
    expect(() => {
        const commandArgs = ['dir=./envs', 'target=qa']
        parseArguments(commandArgs)
    }).toThrow()
})

test('not inform dir must result in default dir', () => {
    const commandArgs = ['target=qa', 'output=./my-env.json']

    const expected = JSON.stringify({
        target: 'qa',
        output: './my-env.json',
        dir: constants.DEFAULT_DIR
    })
    const received = JSON.stringify(parseArguments(commandArgs))

    expect(received).toBe(expected)
})
