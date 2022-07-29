import Image from "next/image";
import React from "react";

export default function NavbarItem() {
  return (
    <li>
      <a>
        <Image src="/icons/Movie.svg" width={24} height={24} />
      </a>
    </li>
  );
}
