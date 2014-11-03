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
		if(route && route.action) {
			return {
				validation: route.action.validation !== undefined ? route.action.validation : false
			};
		} else {
			return {};
		}
	}
};
