import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="text-3xl">
      <div className="flex items-end gap-4">
        <a href="https://www.instagram.com/ffluktrpp/" target="_blank">
          <div>
            <FontAwesomeIcon
              className="hover:text-4xl hover:text-primaryTitle transition-all"
              icon={faInstagram}
            />
          </div>
        </a>
        <a href="https://github.com/ffluktrpp" target="_blank">
          <div>
            <FontAwesomeIcon
              className="hover:text-4xl hover:text-primaryTitle transition-all"
              icon={faGithub}
            />
          </div>
        </a>
      </div>
      <div className="text-lg items-center py-2">theerapat.sric@gmail.com</div>
    </div>
  );
};

export default Contact;