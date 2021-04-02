import React from "react";
import ImageAvatars from "./Avatar";
import SearchBar from "./SearchBar";
import BookGrid from "./Card";
import ThemeToggler from "./Theme";
//const { Book } = require("../Models/Book");

function Home() {
	return (
		<div>
			<ImageAvatars />
			<SearchBar />
			<ThemeToggler />
			<BookGrid />
		</div>
	);
}

export default Home;
