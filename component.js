'use strict';

var validator = require('node-restify-validation');

module.exports = {
	enable: true,

	name: 'validator',

	afterServer: function (elefrant, server) {
		return server.use(validator.validationPlugin( {
			errorsAsArray: false
		}));
	},

	paramRoute: function (elefrant, route) {
		if(route) {
			return {
				validation: route.validation !== undefined ? route.validation : false
			};
		} else {
			return {};
		}
	}
};
