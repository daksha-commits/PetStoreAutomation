// const supertest = require('supertest') ;
// const expect  = require('chai').expect ;
// const qaenv = require('./qaenv.js');

// const request = supertest(qaenv.baseUrl) ;

import supertest from 'supertest' ;
import qaenv from '../config/qaenv' ;
const request = supertest(qaenv.baseUrl) ;
import expect from 'chai' ;
export default { request, expect };