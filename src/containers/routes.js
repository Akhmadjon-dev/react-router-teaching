import Movie from "./Movies/Movie";
import Users from "./user";

export default [
  { exact: true, path: "/users", component: <Users />, key: "users" },
  { exact: true, path: "/movies", component: <Movie />, key: "movies" },
];
