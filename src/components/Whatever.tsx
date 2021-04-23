import { useContext } from 'react';
import { MovieContext } from '../contexts/MovieProvider';
const Whatever = () => {
  const [history, setHistory] = useContext(MovieContext);
  return (
    <div
      onClick={() => {
        setHistory({ ...history, position: 1 });
      }}
    >
      {history.position} whatever
    </div>
  );
};

export default Whatever;
