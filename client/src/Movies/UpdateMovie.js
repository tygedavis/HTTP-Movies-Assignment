import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initValue = {
  metascore: '',
  director: '',
  title: '',
  stars: []
}

const UpdateMovie = props => {
  let id = props.match.params.id;
  
  const [movie, setMovie] = useState(initValue);
  console.log('state updatemovie: ', movie)
  //console.log('Props UpdateMovie: ', props)

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))
  }, []);

  const changeHandler = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/movies/${id}`, movie)
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
          onChange={changeHandler}
          placeholder="Movie Title"
          value={movie.name}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="Price"
          value={movie.director}
        />
        <div className="baseline" />

        <input
          type="text"
          name="metascore"
          onChange={changeHandler}
          placeholder="Image"
          value={movie.metascore}
        />
        <div className="baseline" />

        <input
          type="text"
          name="star"
          onChange={changeHandler}
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