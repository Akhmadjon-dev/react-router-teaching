import Add from "./Form/add.js";
import Movie from "./Movies/index.jsx";
import MovieInfo from "./Movies/MovieInfo";
import Users from "./user";

export default [
  { exact: true, path: "/users", component: Users, key: "users" },
  { exact: true, path: "/movies", component: Movie, key: "movies" },
  { exact: true, path: "/movies/add", component: Add, key: "movies" },
  {
    exact: true,
    path: "/movies/:id",
    component: MovieInfo,
    key: "movies-info",
  },
];
