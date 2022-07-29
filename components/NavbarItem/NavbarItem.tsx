import Image from "next/image";
import Shape from "../../assests/icons/Shape.svg";
import TV from "../../assests/icons/tv.svg";
import Movie from "../../assests/icons/Movie.svg";
import Bookmark from "../../assests/icons/Bookmark.svg";
import Film from "../../assests/icons/film.svg";
interface Props {
  icon: string;
}
export default function NavbarItem(props: Props) {
  if (props.icon === "movie") {
    return (
      <li>
        <a>
          <Movie />
        </a>
      </li>
    );
  } else if (props.icon === "tv") {
    return (
      <li className="w-full items-center">
        <a>
          <TV fill="#5A698F" />
        </a>
      </li>
    );
  } else if (props.icon === "shape") {
    return (
      <li className="w-full items-center">
        <a>
          <Shape fill="#5A698F" />
        </a>
      </li>
    );
  } else if (props.icon === "bookmark") {
    return (
      <li className="w-full items-center">
        <a>
          <Bookmark fill="#5A698F" />
        </a>
      </li>
    );
  } else if (props.icon === "film") {
    return (
      <li className="w-full items-center">
        <a>
          <Film fill="#5A698F" />
        </a>
      </li>
    );
  }
  return <div></div>;
}

import React from "react";
