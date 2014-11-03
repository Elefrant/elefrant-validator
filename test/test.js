'use strict';

var component = require('../component'),
		restify = require('restify'),
		should = require('should');

var server = restify.createServer();

describe('Validator', function () {

	it('exports an object', function () {
		should.exist(component);
	});

	it('check afterServer', function () {
		should(component.afterServer.func({}, server)).be.ok;
	});

	it('check paramRoute', function () {
		should(component.paramRoute({})).be.an.Object;
	});
});