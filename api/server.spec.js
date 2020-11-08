const supertest = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
const { intersect } = require('../../../Back End/node-auth2-project/config');

let loginToken = '';

beforeAll(async () => {
	await db('users').truncate();
});

describe('server', () => {
	it('throws error 500 if creating user without password', () => {
		const newUser = {
			username: 'yeet',
		};
		return supertest(server)
			.post('/api/auth/register')
			.send(newUser)
			.then((res) => {
				expect(res.status).toBe(500);
			});
	});

	it('gives 201 if user creation is successful', () => {
		const newUser = {
			username: 'yeet',
			password: 'dab',
		};
		return supertest(server)
			.post('/api/auth/register')
			.send(newUser)
			.then((res) => {
				expect(res.status).toBe(201);
			});
	});
	it('throws error 500 if invalid password when logging in', () => {
		const newUser = {
			username: 'yeet',
			password: 'ye5w49hj8u',
		};
		return supertest(server)
			.post('/api/auth/login')
			.send(newUser)
			.then((res) => {
				expect(res.status).toBe(401);
			});
	});

	it('gives 200 if user login is successful', () => {
		const newUser = {
			username: 'yeet',
			password: 'dab',
		};
		return supertest(server)
			.post('/api/auth/login')
			.send(newUser)
			.then((res) => {
				loginToken = res.body.toString();
				expect(res.status).toBe(200);
			});
	});
	it('gives 200 if joke api get request is successful', () => {
		return supertest(server)
			.get('/api/jokes')
			.set({ token: loginToken })
			.then((res) => {
				expect(res.status).toBe(200);
			});
	});
	it('gives 401 if joke api get request is not successful', () => {
		return supertest(server)
			.get('/api/jokes')
			.then((res) => {
				expect(res.status).toBe(401);
			});
	});
});
