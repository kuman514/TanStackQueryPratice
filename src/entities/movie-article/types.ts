/**
 * @desc
 * Object type about movie detail article.
 * This type is backend-related, so there will be idnetifiers without camelCase.
 */
export interface MovieArticle {
  id: number;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

/**
 * @desc
 * Object type about response body for movie detail article.
 */
export type GetMovieArticleResponseBody = MovieArticle;
