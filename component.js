'use strict';

var validator = require('node-restify-validation');

module.exports = {
	enable: true,

	name: 'validator',

	afterServer: {
		weight: 1,
		func: function (elefrant, server) {
			return server.use(validator.validationPlugin( {
				errorsAsArray: true
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
