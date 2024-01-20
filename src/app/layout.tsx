'use client';
import { useState, Component, ReactNode } from 'react';

import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { mainListItems, secondaryListItems } from './dashboard/listItems';
import Deposits from './dashboard/Deposits';
import Orders from './dashboard/Orders';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import './layout.css';
import './globals.css';

const defaultTheme = createTheme();

const RootLayout = () => {
	const [open, setOpen] = useState<boolean>(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<html lang='en'>
			<body>
				<ThemeProvider theme={defaultTheme}>
					<AppBar position='static' className='appBar'>
						<Toolbar>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='open drawer'
								sx={{ mr: 2 }}
								onClick={toggleDrawer}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant='h6'
								noWrap
								component='div'
								sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
							>
								MUI
							</Typography>
							<div className='search'>
								<div className='searchIconWrapper'>
									<SearchIcon />
								</div>
							</div>
						</Toolbar>
					</AppBar>
					<Drawer
						variant='permanent'
						className={`drawerMenu ${open ? 'drawerOpen' : 'drawerClosed'}`}
						open={open}
					>
						<div className='drawerHeader'></div>
						<Divider />
						<List>
							{[
								'Inbox',
								'Starred',
								'Send email',
								'Drafts',
								'All mail',
								'Trash',
								'Spam',
							].map((text, index) => (
								<ListItem key={text} disablePadding sx={{ display: 'block' }}>
									<ListItemButton
										sx={{
											minHeight: 48,
											justifyContent: open ? 'initial' : 'center',
											px: 2.5,
										}}
									>
										<ListItemIcon
											sx={{
												minWidth: 0,
												mr: open ? 3 : 'auto',
												justifyContent: 'center',
											}}
										></ListItemIcon>
										<ListItemText
											primary={text}
											sx={{ opacity: open ? 1 : 0 }}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Drawer>
				</ThemeProvider>
			</body>
		</html>
	);
};
export default RootLayout;
