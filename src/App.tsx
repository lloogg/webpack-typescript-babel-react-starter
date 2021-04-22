import MovieList from './components/MovieList';
import Whatever from './components/Whatever';
import MovieProvider from './contexts/MovieProvider';
const App = () => {
  return (
    <>
      <MovieProvider>
        <MovieList />
        <Whatever />
      </MovieProvider>
    </>
  );
};

export default App;
