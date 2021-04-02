import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

export default function ThemeToggler() {
	const [darkState, setDarkState] = useState(false);
	const palletType = darkState ? "dark" : "light";
	const darkTheme = createMuiTheme({
		palette: {
			type: palletType,
		},
	});
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<div> Theme ThemeToggler </div>
			<Switch checked={darkState} onChange={handleThemeChange} />
		</ThemeProvider>
	);
}
