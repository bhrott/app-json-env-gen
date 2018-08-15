const parseArguments = require('../lib/parseArguments')

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

test('not inform dir throws an error', () => {
    expect(() => {
        const commandArgs = ['target=qa', 'output=./my-env.json']
        parseArguments(commandArgs)
    }).toThrow()
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
