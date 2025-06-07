import { useState } from 'react';

import MovieArticle from '^/features/movie-article';
import SearchMovieList from '^/features/search-movie-list';
import TextInput from '^/shared/text-input';

function App() {
  const [query, setQuery] = useState<string>('');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
    null
  );

  const renderMovieArticleModal =
    selectedArticleId !== null ? (
      <MovieArticle
        movieId={selectedArticleId}
        onClickOutside={() => {
          setSelectedArticleId(null);
        }}
      />
    ) : null;

  return (
    <main className="py-40 w-screen min-h-dvh flex flex-col items-center gap-12">
      <TextInput textValue={query} onChange={setQuery} />
      <SearchMovieList query={query} onClickListItem={setSelectedArticleId} />
      {renderMovieArticleModal}
    </main>
  );
}

export default App;
