const express = require("express");
const router = express.Router();

const {
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
  getSearchResults,
} = require("../controllers/tmdbController");

router.get("/trending/:type", getTrending);

router.get("/trending/movie/:id", singleMovieTrending);

router.get("/trending/show/:id", singleShowTrending);

router.get("/list/movie/:type", getMovieList);

router.get("/list/show/:type", getShowList);

router.get("/trending/movie/page/:page", getMovieTrendingPage);

router.get("/movie/nowplaying/:page", getMovieNowPlayingPage);

router.get("/movie/popular/:page", getMoviePopularPage);

router.get("/movie/toprated/:page", getMovieTopRatedPage);

router.get("/movie/upcoming/:page", getMovieUpcomingPage);

router.get("/details/movie/:id", getMovieDetailsPage);

router.get("/movie/genre/:genre/:page", getMovieGenrePage);

router.get("/trending/show/page/:page", getShowTrendingPage);

router.get("/show/airingtoday/:page", getShowAiringTodayPage);

router.get("/show/popular/:page", getShowPopularPage);

router.get("/show/toprated/:page", getShowTopRatedPage);

router.get("/show/ontheair/:page", getShowOnTheAirPage);

router.get("/details/show/:id", getShowDetailsPage);

router.get("/episodes/show/:id/:seasonnumber", getShowEpisodesPage);

router.get("/show/genre/:genre/:page", getShowGenrePage);

router.get("/person/:id", getPersonDetailsPage);

router.get("/search/:query/:page", getSearchResults);

module.exports = router;
