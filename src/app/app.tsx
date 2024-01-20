import { Elysia } from 'elysia';
import 'dotenv/config';
import { staticPlugin } from '@elysiajs/static';

const PORT = Number(process.env.PORT) || 3000;

const app = new Elysia()
	.use(staticPlugin())
	.get('/', ({ params: { id } }) => {
		return { id: id, title: 'Learn Buns' };
	})
	.get('/dashboard', ({ params: { id } }) => {
		return { id: id, title: 'Learn Buns' };
	})
	.get('/editor', ({ params: { id } }) => {
		return { id: id, title: 'Learn Buns' };
	})
	.get('/post/:id', ({ params: { id } }) => {
		return { id: id, title: 'Learn Buns' };
	});

app.listen(PORT);
console.log(PORT);
console.log('Listening on Port ', app.server?.port);
