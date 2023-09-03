import Image from "next/image";
import brzStreamingLogo from "../../public/icon/BrzStreaming.svg";
import userIcon from "../../public/icon/userIcon.svg";
import loupeIcon from "../../public/icon/loupeIcon.svg";
import "@/styles/header.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="all-nav p-10 ">
        <div className="left-part">
          <Image src={brzStreamingLogo} alt="logo of the website" />
        </div>
        <div className="middle-part flex justify-center">
          <nav className="w-2/4">
            <ul className="flex justify-around items-center">
              <li className="text-white font-medium text-lg hover:font-bold">
                <Link href="#"> Home</Link>
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
        <div className="right-part flex justify-around">
          <div className="search-space border-2 border-white rounded-full w-32 h-9 flex justify-evenly items-center">
            <Image src={loupeIcon} alt="search icon" />
            <p className="font-medium">Search</p>
          </div>
          <div className="account-space w-auto">
            <Image src={userIcon} alt="accout icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
