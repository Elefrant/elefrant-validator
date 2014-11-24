'use strict';

var validator = require('node-restify-validation');

module.exports = {
	enable: true,

	name: 'validator',

	afterServer: {
		weight: 2,
		func: function (elefrant, server, restify) {
			return server.use(validator.validationPlugin( {
				errorsAsArray: true,
				errorHandler: restify.errors.ValidationError
			}));
		}
	},

	paramRoute: function (elefrant, route, action) {
		if(action && action.validation) {
			return {
				validation: action.validation !== undefined ? action.validation : false
			};
		} else {
			return {};
		}
	}
};
