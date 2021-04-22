import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieProvider';
const Whatever = () => {
  const [{ like, comment }, dispatch] = useContext(MovieContext);
  return (
    <>
      <hr />
      <div>like: {like}</div>
      <div>comment: {comment}</div>
      <button
        onClick={() => {
          dispatch({ type: 'increment_comment' });
        }}
      >
        increment comment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement_comment' });
        }}
      >
        decrement comment
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'increment_like', payload: 'whatever payload' });
        }}
      >
        increment like
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'decrement_like' });
        }}
      >
        decrement like
      </button>
    </>
  );
};

export default Whatever;
