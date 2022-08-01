import type { NextPage } from "next";
import Navbar from "../components/Navbar/Navbar";
import useQuery from '@tanstack/react-query'
import data from '../data.json'
import Image from "next/image";
import { useEffect, useState } from 'react'

interface Movies {
  title: string
}

const Home: NextPage = (Movies) => {
  const [movies, setMovies] = useState(data)
  console.log(movies)
  return (
    <div className="font-sans flex flex-col md:flex-row">
      <Navbar active="home" />
      <div className="w-full min-h-screen p-4">
        <div className="border h-full">
          {movies.filter((movie) => movie.isTrending).map((movie) => (
            <div>
              <li className="text-3xl font-white">{movie.title}</li>
              <Image src={movie.thumbnail.trending?.large} width={100} height={100} />
            </div>))}
        </div>
      </div>
    </div>
  );
};

export default Home;
