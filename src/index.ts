// import express, { Request, Response } from 'express';
// 
// export const app = express();
// 
// const PORT = process.env.PORT || 3000;
// 
// app.get('/health', (_req: Request, res: Response) => {
//  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
// });
// 
// app.get('/api/hello', (_req: Request, res: Response) => {
//   res.json({ message: 'Hello from Practical CI/CD!' });
// });
//
// // Only start the server if this file is run directly (not when imported by tests)
// if (require.main === module) {
//   app.listen(PORT, () => {
//    console.log(`Server running on http://localhost:${PORT}`);
//  });
// }
import { app } from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://localhost:${PORT}`);
});