import { http, run } from 'lugger';
import Express, { Request, Response } from 'express';

run; {
    const server = http.server(7000).start();
    server.post('/github-webhooks', (req: Request, res: Response) => {
        const chunks: Buffer[] = [];
        req.on('data', chunk => {
            chunks.push(chunk);
        });
        req.on('end', () => {
            const params = JSON.parse(Buffer.concat(chunks).toString('utf8'));
            console.log(params);
            res.end('');
        });
    });
}
