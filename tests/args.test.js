const args = require('../lib/args')

test('current args must return an object', () => {
    const commandArgs = ['dir=./envs', 'target=qa', 'output=./my-env.json']

    args.useSource(commandArgs)

    const expected = JSON.stringify({
        dir: './envs',
        target: 'qa',
        output: './my-env.json'
    })
    const received = JSON.stringify(args.current)

    expect(received).toBe(expected)
})
