import { Elysia } from 'elysia';
import 'dotenv/config';

const PORT = Number(process.env.PORT) || 3000;

const app = new Elysia()
	.get('/', () => 'Hello Bun, First app with BUN')
	.get('/post/:id', ({ params: { id } }) => {
		return { id: id, title: 'Learn Buns' };
	});

/*app.group('/user', (app) =>
	app
		.post('/signin', () => 'Sign in route')
		.get('/id', () => {
			'User with ID';
		})
);*/
app.listen(PORT);
console.log(PORT);
console.log('Listening on Port ', app.server?.port);
