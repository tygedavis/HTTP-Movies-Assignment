import React, { useState } from 'react';
import axios from 'axios';

const initValue = {
  metascore: '',
  director: '',
  title: '',
  stars: []
}

const UpdateMovie = props => {
  //console.log('Props on UpdateMovie: ', props)
  const [movie, setMovie] = useState(initValue);

  const changeHandler = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
    setMovie({
      ...movie,
      [e.target.name]: movie
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/movies/${movie.id}`, movie)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return(
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          /*onChange={changeHandler}*/
          placeholder="Movie Title"
          value={movie.name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          /*onChange={changeHandler}*//*onChange={changeHandler}*/
          placeholder="Price"
          value={movie.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
          /*onChange={changeHandler}*/
          placeholder="Image"
          value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="star"
          /*onChange={changeHandler}*/
          placeholder="Description"
          value={movie.star}
        />
        <button onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;