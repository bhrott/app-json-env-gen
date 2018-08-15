# app-json-env-gen

Usefull tool to create a json configuration file for your js apps.

## Motivation

We can easily use environment variables for app configuration. But when you want more complex configuration structure, probably a `.env` file will not solve your problem. <br/>
Env files needs to prefix every key, like this sample:

```
GOOGLE_MAPS_URL:...
GOOGLE_MAPS_KEY:...
```

Probably you want to use some more structured like:

```json
{
    "GOOGLE_MAPS": {
        "URL": "...",
        "KEY": "..."
    }
}
```

And you can do it. But when you have a multiple environments (`local`, `qa`, `staging`, `production`), it comes to be more complicated.

## Instalation

Just run `npm install --save-dev app-json-env-gen`

## Usage

Create a folder for your enviroment files.

```
> mkdir my-envs
```

Now create an env-config file (you can use any name, in this sample, I used `global`)

```
> cd my-envs
> touch global.env.js
```

This is the template of the json file:

```json
{
    "meta": {},
    "data": {}
}
```

Where:

| field | description                                          | type   | required |
| ----- | ---------------------------------------------------- | ------ | -------- |
| meta  | configuration used for the lib to generate the files | string | yes      |
| data  | your configuration file content                      | string | yes      |

For the `meta` property, we have:

| field | description                                                                                                                                                                            | type   | required |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- |
| from  | if your configuration must be merged with other file, add the file name here. This is usefull to prevent duplicated configuration that has the same value across multiple environments | string | no       |

## Sample usage

Create a folder named `envs` in the root of your project.

Inside the `envs` folder, create a `global.env.js` with this content:

```js
module.exports = {
    meta: {},
    data: {
        GOOGLE_MAPS: {
            URL: 'https://googlemaps.fake.api',
            KEY: 'th1sisafak3key'
        },
        BACKEND_API: {
            URL: 'https://mysite.com/api'
        }
    }
}
```

Inside the `envs` folder, create a `qa.env.js` with this content:

```js
module.exports = {
    meta: {
        from: 'global'
    },
    data: {
        BACKEND_API: {
            URL: 'https://qa.mysite.com/api'
        }
    }
}
```

Now, in `packages.json`, create this script:

```
"gen-env-qa": "app-json-env-gen dir='./envs' target='qa' output='./my-app-conf.json'"
```

And run `npm run gen-env-qa`

It will:

-   `dir='./envs'`: enter the envs directory and look for env files.
-   `target='qa'`: it will use `qa.env.js` as primary file.
-   `output='./my-app-conf.json'`: after qa file is processed, this new file will be generated.
