# elefrant-validator Component

[![wercker status](https://app.wercker.com/status/5d9db5b306c9adca9fc2cf913e1cb0fb/s/master "wercker status")](https://app.wercker.com/project/bykey/5d9db5b306c9adca9fc2cf913e1cb0fb)

[![Dependency Status](https://gemnasium.com/Elefrant/elefrant-validator.svg)](https://gemnasium.com/Elefrant/elefrant-validator)


## Usage

Validation for REST Services.

When the component is enable, all routes from the API are `block` to non users.
If you want to make a route `public`:

```js

module.exports = [{
	path: '/',
	method: 'GET',
	oauth: false,
	version: [
		'1.0.0'
	],
	action: 'users.v1.getAll'
}];

```


## Dependable components

**elefrant-template-engine**

**elefrant-session**


## Structure

### Config `/config/`

Copy `oauth2.js` from `./components/elefrant-oauth2` to main config folder.


#### Grants

Select the grunt types for the authentication server.

```js
[
    'password',
    'refresh_token'
]
```


## Launch tests

Just put in the console: `npm test`


## License

MIT © [Elefrant](http://elefrant.com/#/license)
