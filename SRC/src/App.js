import React, { useState, useEffect } from 'react';
import { Heading } from './components/Heading';
import { UnsplashImage } from './components/UnsplashImage';
import { Loader } from './components/Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import { createGlobalStyle } from 'styled-components';
import SearchPhotos from "./searchPhotos"
import './srch.css';
// Style
const GlobalStyle = createGlobalStyle`
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }

  const breakpointColumnsObj = {
    default: 6,
    1250: 5,
    1200: 5,
    1100: 5,
    1150: 5,
    1000:4,
    992: 4,
    900:3,
    768: 3,
    705:2,
    576: 1,
    525: 1,
    420:1,
  };
  return (
    <div>
      <div className="App">
        <div className="container">
          <h1>Search Images</h1>
          <SearchPhotos/>
          <Heading/>
          <GlobalStyle/>
        </div>
        </div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
      <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-grid_column"
              >
                 {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
              </Masonry>
      </InfiniteScroll>
    </div>
  );
}
export default App;
