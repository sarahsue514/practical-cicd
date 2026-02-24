import request from 'supertest';
// import express from 'express';
// import { app } from '../index';
import { app } from '../app';
describe('API Endpoints', () => {
    it("should return 200 on /health", async () => {
        const response = await request(app).get("/health");
        expect(response.status).toBe(200);
        expect(response.body.status).toBe("ok");
    });
    it('should return hello message', async () => {
        const response = await request(app).get('/api/hello'
        );
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Hello from Practical CI/CD!");
    });
});