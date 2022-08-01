import Shape from "../../assests/icons/Shape.svg";
import TV from "../../assests/icons/tv.svg";
import Movie from "../../assests/icons/Movie.svg";
import Bookmark from "../../assests/icons/Bookmark.svg";
import Film from "../../assests/icons/film.svg";
import Link from "next/link"
interface Props {
  icon: string;
  active?: boolean
}
export default function NavbarItem(props: Props) {
  if (props.icon === "movie") {
    return (
      <li>
        <Link href="/">
          <a>
            <Movie />
          </a>
        </Link>
      </li>
    );
  } else if (props.icon === "tv") {
    if (props.active === true) {
      return (
        <li className="w-full items-center">
          <a>
            <TV fill="#FFF" />
          </a>
        </li>
      )
    }
    return (
      <li className="w-full items-center">
        <Link href="/shows">
          <a>
            <TV fill="#5A698F" />
          </a>
        </Link>
      </li>

    );
  } else if (props.icon === "shape") {

    if (props.active === true) {
      return (
        <li className="w-full items-center">
          <a>
            <Shape fill="#FFF" />
          </a>
        </li>
      )
    }
    return (
      <li className="w-full items-center">
        <Link href="/">
          <a>
            <Shape fill="#5A698F" />
          </a>
        </Link >
      </li>
    );
  } else if (props.icon === "bookmark") {
    if (props.active) {

      return (
        <li className="w-full items-center">
          <a>
            <Bookmark fill="#FFF" />
          </a>
        </li>
      )
    }
    return (
      <li className="w-full items-center">
        <Link href="/bookmarks">
          <a>
            <Bookmark fill="#5A698F" />
          </a>
        </Link>
      </li>
    );
  } else if (props.icon === "film") {
    if (props.active == true) {
      return (

        <li className="w-full items-center">
          <a>
            <Film fill="#FFF" />
          </a>
        </li>
      )
    }
    return (
      <li className="w-full items-center">
        <Link href="/movies">
          <a>
            <Film fill="#5A698F" />
          </a>
        </Link>
      </li>
    );
  }
  return <div></div>;
}

import React from "react";
