/**
 * @desc
 * Object type about list items for movie search result.
 * This type is backend-related, so there will be idnetifiers without camelCase.
 */
export interface MovieListItem {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/**
 * @desc
 * Object type about list for movie search result.
 */
export type MovieList = MovieListItem[];

/**
 * @desc
 * Object type about response body for movie search result.
 * This type is backend-related, so there will be idnetifiers without camelCase.
 */
export interface GetMovieListResponseBody {
  page: number;
  results: MovieList;
  total_pages: number;
  total_results: number;
}
