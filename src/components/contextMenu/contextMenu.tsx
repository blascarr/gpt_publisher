import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import contexts from './fakeContext'; // Fake Contexts for now, Contexts should be provided by database.

type Contexto = {
	id: number;
	title: string;
	description: string;
};

type Props = {
	context: Contexto[];
};

type State = {
	opened: boolean;
};

export class MenuContextual extends React.Component<Props, State> {
	state: State = {
		opened: false,
	};

	toggleDrawer =
		(opened: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === 'keydown' &&
				((event as React.KeyboardEvent).key === 'Tab' ||
					(event as React.KeyboardEvent).key === 'Shift')
			) {
				return;
			}
			this.setState({ opened });
		};

	render() {
		return (
			<Drawer open={this.state.opened} onClose={this.toggleDrawer(false)}>
				<List>
					{this.props.context.map((context, index) => (
						<ListItem button key={index}>
							{context.title}
						</ListItem>
					))}
				</List>
			</Drawer>
		);
	}
}
