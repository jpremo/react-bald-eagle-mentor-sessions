import React, { useState } from "react";

const Form = ({
    title,
    imageUrl,
    genre,
    handleImageUrlChange,
    handleGenreChange,
    handleTitleChange,
}) => {
    return (
        <div>
            <input
                id="title"
                name="title"
                type="text"
                placeholder="title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                placeholder="imageUrl"
                value={imageUrl}
                onChange={handleImageUrlChange}
            />
            <select onChange={handleGenreChange} value={genre}>
                <option value="sci-fi">Sci-Fi</option>
                <option value="romance">Romace</option>
                <option value="non-fiction">Non-fiction</option>
                <option value="horror">Horror</option>
            </select>
            <button>Submit</button>
        </div>
    );
};

export default Form;
