import Image from "next/image";
import Shape from "../../assests/icons/Shape.svg";
import TV from "../../assests/icons/tv.svg";
import Movie from "../../assests/icons/Movie.svg";
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
      <li>
        <a>
          <TV fill="#5A698F" />
        </a>
      </li>
    );
  } else if (props.icon === "shape") {
    return (
      <li>
        <a>
          <Shape fill="#5A698F" />
        </a>
      </li>
    );
  }
  return <div></div>;
}

import React from "react";
