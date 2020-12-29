import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
`;

const unsplash = new Unsplash({
  accessKey: "Hrz02H4_PT7nMaw25FlMEUdFRjG07OBj8Y1zeK1PTfA",
});
export default function SearchPhotos() {

  const [query, setQuery] = useState("");
  const [images, setImage] = useState([]);


  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setImage(json.results);
      });

  };

  return (
    <>
        <GlobalStyle/>
      <form className="form" onSubmit={searchPhotos}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
  
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {images.map((image) => (
          <div className="card" key={image.id}>
            <img
              className="card--image"
              alt={image.alt_description}
              src={image.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </>
  );
}
