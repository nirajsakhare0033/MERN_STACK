require("dotenv").config({ path: "controllers/../.env" });
const axios = require("axios");


const { BASE_URL, API_KEY } = process.env;


const getTrending = async (req, res) => {
  
  try {
    const request = await axios.get(
      `${BASE_URL}trending/${req.params.type}/day?api_key=${API_KEY}`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const singleMovieTrending = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}movie/${req.params.id}?api_key=${API_KEY}&append_to_response=videos,release_dates`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const singleShowTrending = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}tv/${req.params.id}?api_key=${API_KEY}&append_to_response=videos,content_ratings`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMovieList = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}movie/${req.params.type}?api_key=${API_KEY}&language=en-US&page=1`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getShowList = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}tv/${req.params.type}?api_key=${API_KEY}&language=en-US&page=1`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMovieTrendingPage = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${req.params.page}`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMovieNowPlayingPage = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMoviePopularPage = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMovieTopRatedPage = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMovieUpcomingPage = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMovieDetailsPage = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}movie/${req.params.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,casts,external_ids,similar&include_image_language=en,null`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getMovieGenrePage = async (req, res) => {
  try {
    const request = await axios.get(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${req.params.page}&with_genres=${req.params.genre}&with_watch_monetization_types=flatrate`
    );
    res.status(200).json(request.data);
  } catch (error) {
    res.status(500).json(error);
  }
};


const getShowTrendingPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}trending/tv/day?api_key=${API_KEY}&page=${req.params.page}`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getShowAiringTodayPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}tv/airing_today?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getShowPopularPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}tv/popular?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getShowTopRatedPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getShowOnTheAirPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${req.params.page}`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getShowDetailsPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}tv/${req.params.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images,credits,similar,external_ids,episode_groups&include_image_language=en,null`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getShowEpisodesPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}tv/${req.params.id}/season/${req.params.seasonnumber}?api_key=${API_KEY}&language=en-US`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getShowGenrePage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${req.params.page}&without_genres=${req.params.genre}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getPersonDetailsPage = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}person/${req.params.id}?api_key=${API_KEY}&language=en-US&append_to_response=combined_credits,images,external_ids`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };


const getSearchResults = async (req, res) => {
    try {
      const request = await axios.get(
        `${BASE_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${req.params.query}&page=${req.params.page}&include_adult=false`
      );
      res.status(200).json(request.data);
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports = {
  getTrending,
  singleMovieTrending,
  singleShowTrending,
  getMovieList,
  getShowList,
  getMovieTrendingPage,
  getMovieNowPlayingPage,
  getMoviePopularPage,
  getMovieTopRatedPage,
  getMovieUpcomingPage,
  getMovieDetailsPage,
  getMovieGenrePage,
  getShowTrendingPage,
  getShowAiringTodayPage,
  getShowPopularPage,
  getShowTopRatedPage,
  getShowOnTheAirPage,
  getShowDetailsPage,
  getShowEpisodesPage,
  getShowGenrePage,
  getPersonDetailsPage,
  getSearchResults
};
