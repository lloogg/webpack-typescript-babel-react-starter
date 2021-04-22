import { useContext, useRef } from 'react';
import { MovieContext } from '../contexts/MovieProvider';
const MovieList = () => {
  const [{ like, comment }, dispatch] = useContext(MovieContext);
  const ref = useRef(0);
  return (
    <>
      <div>like: {like}</div>
      <div>comment: {comment}</div>
      <div>renders: {ref.current++}</div>
    </>
  );
};

export default MovieList;
