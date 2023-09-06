"use client";
import Image from "next/image";
import brzStreamingLogo from "../../public/icon/BrzStreaming.svg";
import userIcon from "../../public/icon/userIcon.svg";
import loupeIcon from "../../public/icon/loupeIcon.svg";
import burgerIcon from "../../public/icon/burgerIcon.svg";
import "@/styles/header.scss";
import Link from "next/link";
import { useState, useRef, RefObject } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("Search");
  const inputRef: RefObject<HTMLInputElement> = useRef(null);

  const onInputClick = () => {
    setSearchText("");
  };

  const onInputLeave = () => {
    setSearchText("Search");
  };

  const onButtonClick = () => {
    const searchValue = inputRef.current?.value;
    router.push("/search/" + searchValue);
  };

  return (
    <header className="w-full h-auto">
      <div className="all-nav p-10 ">
        <div className="left-part">
          <Link href="/">
            <Image src={brzStreamingLogo} alt="logo of the website" />
          </Link>
        </div>
        <div className="middle-part">
          <nav className="w-2/4">
            <ul className="flex justify-around items-center">
              <li className="text-white font-medium text-xl hover:font-bold">
                <Link href="/"> Home</Link>
              </li>
              <li className="text-white font-medium text-lg hover:font-bold">
                <Link href="#"> Movie</Link>
              </li>
              <li className="text-white font-medium text-lg hover:font-bold">
                <Link href="#"> Serie</Link>
              </li>
              <li className="text-white font-medium text-lg hover:font-bold">
                <Link href="#"> Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="right-part ">
          <div className="search-space border-2 border-white rounded-full w-56 h-9 flex justify-evenly items-center">
            <button type="button" onClick={onButtonClick}>
              <Image src={loupeIcon} alt="search icon" />
            </button>
            <input
              className="font-medium w-3/4 text-white"
              placeholder={searchText}
              autoComplete="off"
              type="text"
              onClick={onInputClick}
              onBlur={onInputLeave}
              onKeyUp={(e) => {
                if (e.key == "Enter") onButtonClick();
              }}
              ref={inputRef}
            />
          </div>
          <div className="account-space w-auto">
            <Link href="/account">
              <Image src={userIcon} alt="accout icon" />
            </Link>
          </div>
        </div>
        <div className="burger-icon col-span-3 w-auto">
          <Image src={burgerIcon} alt="The burger icon bar" className="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
