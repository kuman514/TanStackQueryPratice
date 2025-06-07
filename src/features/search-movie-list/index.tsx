import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

import type { GetMovieListResponseBody } from '^/entities/movie-list/types';
import ListItem from '^/shared/list-item';

interface Props {
  query: string;
}

export default function SearchMovieList({ query }: Props) {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const searchMovieListQueryStatus = useInfiniteQuery({
    queryKey: ['search-result', query],
    queryFn: async ({ pageParam }) => {
      const response = await axios.get<GetMovieListResponseBody>(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=ko-KR&page=${pageParam}`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      return response.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
    enabled: isEnabled,
  });

  useEffect(() => {
    if (query.trim().length === 0) {
      return;
    }
    const timeout = setTimeout(() => {
      setIsEnabled(true);
    }, 500);
    return () => {
      clearTimeout(timeout);
      setIsEnabled(false);
    };
  }, [query]);

  const listItem = searchMovieListQueryStatus.data?.pages
    .map((page) => page.results)
    .reduce((prev, pageResult) => prev.concat(pageResult), []);

  const isFullPage =
    searchMovieListQueryStatus.data &&
    searchMovieListQueryStatus.data?.pages.length >=
      searchMovieListQueryStatus.data?.pages[0].total_pages;

  const loadingStatus = (() => {
    if (searchMovieListQueryStatus.isFetching) {
      return 'Loading';
    }

    if (isFullPage) {
      return 'All loaded';
    }

    return 'Load more';
  })();

  const renderListItem = listItem
    ? listItem.map((item) => (
        <ListItem
          key={item.id}
          mainTitle={item.title}
          description={item.overview}
          thumbnailUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          thumbnailAlt={`${item.title} 포스터`}
        />
      ))
    : null;

  return (
    <>
      <ul className="w-full max-w-5xl flex flex-row justify-center flex-wrap gap-4">
        {renderListItem}
      </ul>
      <button
        type="button"
        className="px-6 py-4 border border-solid border-green-500 rounded-full cursor-pointer"
        disabled={searchMovieListQueryStatus.isFetching || isFullPage}
        onClick={() => {
          searchMovieListQueryStatus.fetchNextPage();
        }}
      >
        {loadingStatus}
      </button>
    </>
  );
}
