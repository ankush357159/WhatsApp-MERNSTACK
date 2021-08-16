import { AppBar, makeStyles, Toolbar, Box } from "@material-ui/core";

//components
import Login from "./account/Login";

const useStyles = makeStyles({
	loginHeader: {
		height: 200,
		background: "#00bfa5",
		boxShadow: "none",
	},
	component: {
		background: "#dcdcdc",
		height: "100vh",
	},
});

const Messenger = () => {
	const classes = useStyles();
	return (
		<Box className={classes.component}>
			<AppBar className={classes.loginHeader}>
				<Toolbar></Toolbar>
			</AppBar>
			<Login />
		</Box>
	);
};

export default Messenger;
