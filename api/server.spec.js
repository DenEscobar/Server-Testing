const request = require('supertest');
const server = require('./server.js');

describe('route handlers', () =>{
    describe('post /' () =>{
        it('responds with 201 when body is correct', async () =>{
            const body = {name:'The Planet Smashers'}
            const response = await request(server).post('/bands').sedn(body);

            expect(response.status).toBe(201)
        })
    })
})