import React from "react";
import Avatar from "@material-ui/core/Avatar";
import logo from "./logo.png";
import { makeStyles, withStyles } from "@material-ui/core";

//withStyles & makeStyles are used for styling the code
const useStyles = makeStyles({
	BookAvatar: {
		display: "grid",
		placeItems: "center",
		position: "relative",
		left: "150px",
		margin: "50px",
		padding: "20px",
		width: "50%",
		height: "50%",
	},
});

function BookAvatar() {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.BookAvatar}>
				<Avatar alt="logo" src={logo} />
			</div>
		</div>
	);
}

export default BookAvatar;
