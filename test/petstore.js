
const supertest = require('supertest') ;
const expect  = require('chai').expect ;
const qaenv = require('../config/qaenv');
const baseUrl = "https://petstore.swagger.io/v2/" ;
const request = supertest(baseUrl) ;

// A global petID for a Pet in test
let petID ;

/**************************************************************** */
//Sample test URLS and data format
//https://petstore.swagger.io/v2/pet/findByStatus?status=available
//https://petstore.swagger.io/v2/pet/9223372036854245000
//9223372036854245000

// {
//     "id": 9223372036854245000,
//     "category": {
//       "id": 0,
//       "name": "string"
//     },
//     "name": "Samy",
//     "photoUrls": [
//       "string"
//     ],
//     "tags": [
//       {
//         "id": 0,
//         "name": "string"
//       }
//     ],
//     "status": "available"
//   }

/********************************************************************* */

// A test suit  to add a new Pet into the backend
describe('Add a Pet',  () => {
    it('Add a new Pet',  () => {
        petID = `${Math.floor(Math.random() * 9999)}` ;
        var randomName = `Samy - ${petID}` ;
        const data = {
            id : petID,
            name : randomName,
            status : "available",

        };

        return request.post('pet')
        .send(data)
        .then((res) => {
            expect(res.body.name).to.eq(randomName);
        }) ;
    })
          
}) ;

// A test suit to search for a Pet based on Pet ID or all available Pet list
describe('Get a Pet', () => {

    it('Get all Available Pets', async () => {
        const res =  await request.get('pet/findByStatus?status=available') ; 

        expect(res.body).to.not.be.empty;
    }) ;

    it('Get Pet by Id', async  () => {

        let url = `pet/${petID}` ;
        const res =  await request.get(url) ; 
        expect(res.body.id).to.equals(parseInt(petID), "Failed to validate retrieved petID") ;
    
    }) ;

}) ;

// A test suit to Update a Pet
describe('Update a Pet',  () => {

    it('Update Pet name',  () => {
        var randomName = `Oly - ${petID})}` ;
        const data = {
            id : petID,
            name : randomName,
            status : "available"
        };

        return request.put('pet')
        .send(data)
        .then((res) => {
            expect(res.body.name).to.eq(randomName, "Failed to validate updated pet name");
            expect(res.body.id).to.eq(parseInt(petID), "Failed to validate updated petID") ;
        }) ;
    })

 }) ;

 describe('Delete a Pet',  () => {

    it('Delete  Pet', async  () => {

        let url = `pet/${petID}` ;
        const res = await  request.delete(url) ; 
        expect(res.body.message).to.eq(petID, "Failed to validate deleted petID") ;

    }) ;

 }) ;