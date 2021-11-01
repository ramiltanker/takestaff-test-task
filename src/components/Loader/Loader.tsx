import React, { FunctionComponent } from "react";
import { CSSTransition } from "react-transition-group";

// Стили
import "./Loader.css";
// Стили

import "../../transition.css";

interface ILoader {
  isLoaderActive: boolean;
}

type FC<P> = FunctionComponent<P>;

const Loader: FC<ILoader> = ({ isLoaderActive }) => {
  const preloaderRef = React.createRef<HTMLDivElement>();

  return (
    <div className="container">
      <CSSTransition
        in={isLoaderActive}
        timeout={3000}
        mountOnEnter
        unmountOnExit
        classNames="loader"
        nodeRef={preloaderRef}
        appear={true}
      >
        <div className="loader" ref={preloaderRef}></div>
      </CSSTransition>
    </div>
  );
};

export default Loader;
