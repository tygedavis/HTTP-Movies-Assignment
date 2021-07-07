import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateMovie = props => {
  let id = props.match.params.id;
  
  const [movie, setMovie] = useState({
    metascore: '',
    director: '',
    title: '',
    stars: []
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err))
  }, [id]);

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
      .then(res => {
        console.log('Res: ', res)
        setMovie(res.data);
        props.history.push(`/movies/${id}`)
        })
      .catch(err => console.log(err))
  }

  const updateStars = (star, index) => {
    const changedStar = movie.stars.map((item, i) => 
      i === index ? star : item
    );
    setMovie({ ...movie, stars: changedStar });
  };

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

        {movie.stars.map((star, index) => {
        return(<input
          type="text"
          name="star"
          onChange={e => updateStars(e.target.value, index)}
          placeholder="Stars"
          value={star}
        />)
        })}

        <button onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;