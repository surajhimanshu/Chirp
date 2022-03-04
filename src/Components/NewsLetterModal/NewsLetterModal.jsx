import React from "react";
import styles from "./newslettermodal.module.css";
import { BsTwitter } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";



const NewsLetterModal = ({
  openNewsLetterModal,
  handleCloseNewsLetterModal,
}) => {
  return (
    <div
      className={styles.modal_wrapper}
      style={{ opacity: openNewsLetterModal ? "1" : "0" }}
    >
      <div className={styles.modal_content}>

        <div onClick={handleCloseNewsLetterModal} className ={styles.close}>
          <IoMdClose />
        </div>

        <div className={styles.modal_header}>
          <img src="https://abs.twimg.com/responsive-web/client-web/logo_revue.31c21585.svg" alt="img from twitter" />
        </div>

        <div className={styles.modal_title}>
          <h3>Start a newsletter for free</h3>
        </div>

        <div className={styles.modal_content_para}>
        
            Looking for other ways to reach your audience? Ready to get paid for
            your work? It's time to try out <span>@Revue</span> - Twitter's
            newsletter tool for writers and publishers
          
        </div>
        <div className={styles.modal_bullet}>
            <ul>
                <li>Compose and schedule newsletters</li>
                <li>Embed Tweets</li>
                <li>Import email lists</li>
                <li>Analyze engagement</li>
                <li>Earn money from paid subscribers</li>
            </ul>
        </div>

        <div className={styles.modal_button}>
          <button>Find out more</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterModal;
