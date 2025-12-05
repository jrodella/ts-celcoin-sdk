
## Contents

- [Installation](#installation)
- [Setting up your Credentials](#setting-up-your-account)
- [Usage](#usage)
- [Testing](#testing)
- [Publishing](#testing)


## Installation

You can install the package via npm:

```bash
$ npm install ts-celcoin-sdk
```

### Setting up your Credentials

Add your `client_id`, `client_secret` and `url`.

```typescript
...
const Config: ConfigurationData = {
    client_id: environment.CLIENT_ID,
    client_secret: environment.CLIENT_SECRET,
    url: environment.URL
}

Configuration.Init(Config);
...
```

## Usage

Now you can use Client in your project:

``` typescript
const authorization: AuthDto = await Client.createAuthToken();
```

## Testing
There is at least one test for every request, currently running with mocha.

```bash
$ npm run test
```

## Publishing
Change version number at `package.json` and then run:

```bash
$ npm run dist
```
