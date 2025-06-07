import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import type {
  GetMovieArticleResponseBody,
  MovieArticle,
} from '^/entities/movie-article/types';
import Modal from '^/shared/modal';

interface Props {
  movieId: MovieArticle['id'];
  onClickOutside: () => void;
}

export default function MovieArticle({ movieId, onClickOutside }: Props) {
  const movieArticleQueryStatus = useQuery({
    queryKey: ['movie-article', movieId],
    queryFn: async () => {
      const response = await axios.get<GetMovieArticleResponseBody>(
        `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
        {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
          },
        }
      );
      return response.data;
    },
  });

  if (movieArticleQueryStatus.isFetching || !movieArticleQueryStatus.data) {
    return null;
  }

  return (
    <Modal onClickOutside={onClickOutside}>
      <div className="flex flex-col gap-4 max-h-[66dvh] w-full sm:max-w-lg overflow-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <img
            className="w-full max-h-100 sm:w-50 sm:max-h-none object-contain"
            src={`https://image.tmdb.org/t/p/w500${movieArticleQueryStatus.data.poster_path}`}
            alt={`${movieArticleQueryStatus.data.title} 포스터`}
          />
          <div className="flex flex-col">
            <strong className="text-3xl font-bold gap-2">
              {movieArticleQueryStatus.data.title}
            </strong>
            <span className="pb-4">
              {new Date(
                movieArticleQueryStatus.data.release_date
              ).getFullYear()}{' '}
              / {movieArticleQueryStatus.data.original_title}
            </span>
            <span>
              <strong className="font-bold">상영시간</strong>{' '}
              {movieArticleQueryStatus.data.runtime}분
            </span>
            <span>
              <strong className="font-bold">평점</strong>{' '}
              {movieArticleQueryStatus.data.vote_average.toPrecision(3)} /
              10.00점
            </span>
            <span>
              <strong className="font-bold">관객 수</strong>{' '}
              {movieArticleQueryStatus.data.popularity}명
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <strong className="text-2xl font-bold">개요</strong>
          <p className="indent-2">{movieArticleQueryStatus.data.overview}</p>
        </div>
      </div>
    </Modal>
  );
}
