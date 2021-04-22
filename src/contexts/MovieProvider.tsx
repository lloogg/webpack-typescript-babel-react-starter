import { createContext, useReducer } from 'react';
export const MovieContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case 'increment_comment':
      return { ...state, comment: state.comment + 1 };
    case 'decrement_comment':
      return { ...state, comment: state.comment - 1 };
    case 'increment_like':
      console.log(action.payload);
      return { ...state, like: state.like + 1 };
    case 'decrement_like':
      return { ...state, like: state.like - 1 };
    default:
      return state;
  }
}
interface Props {
  children: any;
}
const MovieProvider = ({ children }: Props) => {
  const [{ like, comment }, dispatch] = useReducer(reducer, {
    like: 0,
    comment: 0
  });
  return (
    <MovieContext.Provider value={[{ like, comment }, dispatch]}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
