import React, { useState } from "react";
import Form from "./form/form";
import Preview from "./preview/preview";

function App() {
    const [title, setTitle] = useState("Example Title");
    const handleTitleChange = (event) => {
        const newTitle = event.target.value;
        setTitle(newTitle);
    };

    const [imageUrl, setImageUrl] = useState("Example ImageUrl");
    const handleImageUrlChange = (event) => {
        const newImageUrl = event.target.value;
        setImageUrl(newImageUrl);
    };

    const [genre, setGenre] = useState("horror");
    const handleGenreChange = (event) => {
        const newGenre = event.target.value;
        setGenre(newGenre);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <Form
                title={title}
                handleTitleChange={handleTitleChange}
                imageUrl={imageUrl}
                handleImageUrlChange={handleImageUrlChange}
                genre={genre}
                handleGenreChange={handleGenreChange}
            />
            <Preview title={title} imageUrl={imageUrl} genre={genre}/>
        </div>
    );
}

export default App;
