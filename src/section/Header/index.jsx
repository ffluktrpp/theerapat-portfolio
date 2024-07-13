import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../contents/header";

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-3xl text-primaryTitle font-bold">{data.name}</div>
      <div className="text-xl text-primaryBase font-semibold">
        {data.position}
      </div>
      <div className="text-sm w-4/6 font-thin">{data.caption}</div>
      <div className="mt-4">
        <a
          href="https://drive.google.com/file/d/1VKL_Kk5D7dg-VuCWTvufVvB3j-ngkNwJ/view?usp=sharing"
          target=""
        >
          <span className="rounded-lg bg-primaryTitle text-primaryContent py-2 px-4 font-medium">
            <span className="rotate-90 inline-block mr-3">
              <FontAwesomeIcon className="animate-bounce" icon={faArrowUp} />
            </span>
            {data.btnText}
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
