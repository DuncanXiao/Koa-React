require('babel-polyfill');
require('babel-register')();

const chai = require('chai');
const request = require('supertest');
// const server = require('./app');
// const config = require('config');
// process.env.nodeENV = config.get('env');
// process.env.nodeDomain = config.get('domain');
// process.env.nodeDatebaseConfig = config.get('databaseConfig');
global.expect = chai.expect;
global.request = request;
// global.server = server;