import { useContext, useRef } from 'react';
import { MovieContext } from '../contexts/MovieProvider';
const MovieList = () => {
  const [history, setHistory] = useContext(MovieContext);
  return (
    <div
      onClick={() => {
        setHistory({ ...history, position: history.position + 1 });
      }}
    >
      {history.position}
    </div>
  );
};

export default MovieList;
