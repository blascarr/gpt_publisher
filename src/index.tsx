import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

const App = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1> Hello World</h1>
			<h2>Count: </h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

root.render(<App />);
