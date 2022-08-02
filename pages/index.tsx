import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import data from "../data.json";
import Image from "next/image";
import { useState } from "react";
import Trending from "../components/Trending/Trending";

const Home: NextPage = () => {
  const [movies, setMovies] = useState(data);
  console.log(movies);
  return (
    <div className="font-sans flex flex-col md:flex-row">
      <Navbar active="home" />
      <div className="w-full min-h-screen p-4">
        <div className="border h-full">
          {movies
            .filter((movie) => movie.isTrending)
            .map((movie, index) => (
              <Trending movie={movie} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
