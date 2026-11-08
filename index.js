import express from 'express';
import { prisma } from './lib/prisma.js';

const app = express();

app.get('/', async (req, res) => {
	const users = await prisma.user.findMany();
	res.send(`Number of users: ${users.length}`);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}.`);
});
