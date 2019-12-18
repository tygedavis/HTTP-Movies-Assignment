import React, { useState } from 'react';

const initValue = {
  metascore: '',
  director: '',
  title: '',
  stars: []
}

const UpdateMovie = props => {
  console.log('Props on UpdateMovie: ', props)
  const [movie, setMovie] = useState(initValue);

  return(
    <div>
      <h2>Update Movie</h2>
      <form /*onSubmit={handleSubmit}*/>
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
        {/* <button onClick={handleSubmit}>
          Update
        </button> */}
      </form>
    </div>
  );
};

export default UpdateMovie;