import { createContext, useState } from 'react';
export const MovieContext = createContext(null);

interface Props {
  children: any;
}
const MovieProvider = ({ children }: Props) => {
  let history = {
    position: 0,
    top: 0,
    stack: []
  };
  const [state, setState] = useState(history);
  return (
    <MovieContext.Provider value={[state, setState]}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
