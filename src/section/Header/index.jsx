import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/header";
import ContactForm from "../../components/ContactForm";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl text-primaryTitle font-bold">{data.name}</div>
      <div className="text-xl text-primaryBase font-semibold">
        {data.position}
      </div>
      <div className="text-sm w-4/6 font-thin">{data.caption}</div>
      <div className="mt-4">
        <a
          href="https://mail.google.com/mail/u/1/#inbox?compose=new"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primaryTitle text-primaryContent py-2 px-4 font-medium"
        >
          <span className="rotate-90 inline-block mr-3">
            <FontAwesomeIcon className="animate-bounce" icon={faArrowUp} />
          </span>
          {data.btnText}
        </a>
      </div>
    </div>
  );
};

export default Header;
