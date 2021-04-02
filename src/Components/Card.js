import { useState, React } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Data from "../Models/books_data.json";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 500,
	},
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
}));

export default function BookGrid() {
	const [data, setData] = useState([]);
	//console.log(Data.books[0].Title);

	const getData = () => {
		fetch(Data, {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				console.log(response);
				return response.json();
			})
			.then(function (myJson) {
				console.log(myJson);
				setData(myJson);
			});
	};

	const classes = useStyles();
	return (
		<div className={classes.root}>
			{Data.map((post) => {
				return (
					<Paper className={classes.paper}>
						<Grid container spacing={2}>
							<Grid item>
								<ButtonBase className={classes.image}>
									<img className={classes.img} alt="complex" src={post.image} />
								</ButtonBase>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Typography gutterBottom variant="subtitle1">
											Title:{post.Title}
										</Typography>
										<Typography variant="body2" gutterBottom>
											Author:
										</Typography>
										<Typography variant="body2" color="textSecondary">
											Genre: Action
										</Typography>
									</Grid>
									<Grid item>
										<Typography variant="body2" style={{ cursor: "pointer" }}>
											Description
										</Typography>
									</Grid>
								</Grid>
								<Grid item>
									<Typography variant="subtitle1">$19.00</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				);
			})}
		</div>
	);
}
