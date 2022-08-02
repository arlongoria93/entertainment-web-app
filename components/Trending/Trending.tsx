import React from "react";

type Props = {
  movie: {
    title: string;
    isTrending: boolean;
  };
};

const Trending = ({ movie }: Props) => {
  return <div>{movie.title}</div>;
};

export default Trending;
