import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
	SearchBar: {
		display: "flex",
		flexDirection: "row",
		position: "relative",
		left: "150px",
		margin: "50px",
		padding: "20px",
		width: "50%",
		height: "50%",
	},
	SearchButton: {
		display: "flex",
		flexDirection: "row",
		margin: "60px",
		padding: "20px",
	},
});

export default function SearchBar() {
	const classes = useStyles();

	return (
		<div>
			<form className={classes.SearchBar} noValidate autoComplete="off">
				<TextField
					id="search-book"
					label="Enter Name Of Book"
					variant="outlined"
				/>
			</form>
			<Button
				className={classes.SearchButton}
				variant="contained"
				color="primary"
			>
				Search
			</Button>
		</div>
	);
}
