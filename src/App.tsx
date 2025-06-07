import { useState } from 'react';

import TextInput from '^/shared/text-input';
import SearchMovieList from './features/search-movie-list';

function App() {
  const [query, setQuery] = useState<string>('');
  // const [selectedArticleId, setSelectedArticleId] = useState<number | null>(
  //   null
  // );

  return (
    <main className="py-40 w-screen min-h-dvh flex flex-col items-center gap-12">
      <TextInput textValue={query} onChange={setQuery} />
      <SearchMovieList query={query} />
    </main>
  );
}

export default App;
