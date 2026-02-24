import express, { Request, Response } from 'express';

export const app = express();

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/hello', (_req: Request, res: Response) => {
    res.json({ message: 'Hello from Practical CI/CD!' });
});