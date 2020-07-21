import React from 'react';
import logo from '../assets/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import PageLinks, { data } from '../constants/links';
import { Link } from 'gatsby';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import { graphql, useStaticQuery } from 'gatsby';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SocialLinks from '../constants/socialLinks';
import Image from 'gatsby-image';
import clsx from 'clsx';
import { makeStyles, createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles';
import { animateScroll as scroll, scroller } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250
	},
	fullList: {
		width: 'auto'
	},
	drawerImg: {
		maxWidth: '150px',
		maxHeight: '150px',
		borderRadius: '50%'
	},
	drawerLogo: {
		capitalize: 'true',
		fontSize: '1.2rem'
	},
	title: {
		margin: '0.8rem 0 0',
		color: 'var(--clr-primary-5)'
	},
	listItem: {
		fontSize: '.9rem',
		textTransform: 'capitalize'
	}
}));

const query = graphql`
	{
		file(relativePath: { eq: "hero.jpg" }) {
			childImageSharp {
				fixed {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`;

const Navbar = ({ toggleSidebar }) => {
	const theme = useTheme();
	const classes = useStyles(theme);
	const [ state, setState ] = React.useState({
		open: false
	});
	const { file: { childImageSharp: { fixed } } } = useStaticQuery(query);

	const toggleDrawer = (open) => (event) => {
		console.log(open);
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setState({ open: open });
	};
	const anchor = 'left';

	const scrollToTop = () => {
		scroll.scrollToTop();
	};

	const list = () => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom'
			})}
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
		>
			<List>
				{data.map(({ id, text, icon }) => (
					<React.Fragment>
						<ListItem button key={id}>
							<ListItemIcon>{icon}</ListItemIcon>
							<ListItemText primary={text} className={classes.listItem} />
						</ListItem>
						<Divider />
					</React.Fragment>
				))}
			</List>
		</div>
	);

	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<button type="button" onClick={toggleDrawer(true)} className="toggle-btn">
						<FiMenu />
					</button>
					<a className="base-title logo" onClick={(e) => scrollToTop()}>
						Tarek
					</a>
				</div>
				<PageLinks styleClass="nav-links" />
				<Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
					<div className="header-wrapper">
						<Image fixed={fixed} className={classes.drawerImg} />
						<Link className={`base-title ${classes.drawerLogo}`} to="/">
							<h4 className={classes.title}>Tarek</h4>
						</Link>
						<SocialLinks styleClass="drawer-social-icons" />
					</div>
					{list('left')}
					<div className="copyright">
						<p>tarek&copy;{new Date().getFullYear()}</p>
					</div>
				</Drawer>
			</div>
		</nav>
	);
};

export default Navbar;
