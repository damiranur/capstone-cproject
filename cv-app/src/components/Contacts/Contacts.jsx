import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Contacts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGitlab,
  faGithub,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Title } from "../Title";

export const Contacts = forwardRef((props, ref) => {
  const componentRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollTo: () =>
      componentRef.current.scrollIntoView({
        behavior: "smooth",
      }),
  }));
  return (
    <div className={classes.contactsWrapper} id="contacts" ref={componentRef}>
      <Title titleName="Contacts" />
      <dl className={classes.dl}>
        <dt>
          <FontAwesomeIcon icon={faPhone} style={{ color: "#26c17e" }} />
        </dt>
        <dd>
          <strong>
            <a href="tel: +77780520016">+7 778 052 0016</a>
          </strong>
        </dd>
      </dl>
      <dl>
        <dt>
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#26c17e" }} />
        </dt>
        <dd>
          <strong>
            <a href="mailto: damira666@gmail.com">damira666@gmail.com</a>
          </strong>
        </dd>
      </dl>
      <dl>
        <dt>
          <FontAwesomeIcon icon={faGitlab} style={{ color: "#26c17e" }} />
        </dt>
        <dd>
          <strong>GitLab</strong>
          <a href="https://gitlab.com/damiranur">
            https://gitlab.com/damiranur
          </a>
        </dd>
      </dl>
      <dl>
        <dt>
          <FontAwesomeIcon icon={faGithub} style={{ color: "#26c17e" }} />
        </dt>
        <dd>
          <strong>GitHub</strong>
          <a href="https://github.com/damiranur">
            https://github.com/damiranur
          </a>
        </dd>
      </dl>
      <dl>
        <dt>
          <FontAwesomeIcon icon={faTelegram} style={{ color: "#26c17e" }} />
        </dt>
        <dd>
          <strong>Telegram</strong>
          <a href="https://t.me/damiranur">@damiranur</a>
        </dd>
      </dl>
    </div>
  );
});
