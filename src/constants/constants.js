export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGJhNDExYmMzOTk5MmE0M2Q3NjRiN2ZjZGEwZDNmNCIsInN1YiI6IjY1YjhiZDJiOTBmY2EzMDE0ODA1YTZjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UQHR9cIN78R7IxZrTlVf-g4eL5aRwIS1KR7WVmqDwkA'
    }
};

export const API_URLS = {
    nowPlaying: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    upcomming: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
    topRated: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
}

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/"

export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const BG_IMAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/e1a226fa-a69c-4bb8-a028-57187cc2d894/PK-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"

export const SUPPORTED_LANGUAGE = [
  {
    idetity: "en",
    langName: "English"
  },
  {
    idetity: "hi",
    langName: "Hindi"
  },
  {
    idetity: "te",
    langName: "Telugu"
  }
]