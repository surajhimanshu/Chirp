import React from "react";
import Styles from "./menu.module.css";
import MenuOption from "./MenuOption";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiEnvelope, BiHomeCircle } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { FiBookmark, FiBell } from "react-icons/fi";
import { FaEnvelope, FaHashtag } from "react-icons/fa";
import { HiBell } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { MdBookmark } from "react-icons/md";
import {
  RiHashtag,
  RiFileList2Line,
  RiHome7Fill,
  RiFileList2Fill,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import More from "./More";
import Profiles from "./Profiles";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={Styles.placeholder}></div>
      <div className={Styles.menu}>
        <Link to="/home">
          <AiOutlineTwitter className={Styles.bird} />
        </Link>
        <nav>
          <li>
            <MenuOption
              name="Home"
              icon={<BiHomeCircle />}
              activeIcon={<RiHome7Fill />}
            />
          </li>
          <li>
            <MenuOption
              name="Explore"
              icon={<RiHashtag />}
              activeIcon={<FaHashtag />}
            />
          </li>
          <li>
            <MenuOption
              name="Notifications"
              icon={<FiBell />}
              activeIcon={<HiBell />}
            />
          </li>
          <li>
            <MenuOption
              name="Messages"
              icon={<BiEnvelope />}
              activeIcon={<FaEnvelope />}
            />
          </li>
          <li>
            <MenuOption
              name="Bookmarks"
              icon={<FiBookmark />}
              activeIcon={<MdBookmark />}
            />
          </li>
          <li>
            <MenuOption
              name="Lists"
              icon={<RiFileList2Line />}
              activeIcon={<RiFileList2Fill />}
            />
          </li>
          <li>
            <MenuOption
              name="Profile"
              icon={<BsPerson />}
              activeIcon={<IoPerson />}
            />
          </li>
          <li>
            <More name="More" icon={<CgMoreO />} />
          </li>
        </nav>
        <button
          className={Styles.tweetButton}
          onClick={() => navigate("/compose/tweet")}
        >
          Tweet
        </button>
        <Profiles />
      </div>
    </>
  );
};

export default Menu;
