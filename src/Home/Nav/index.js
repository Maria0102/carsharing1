import React from "react";

import BurgerMenu from "./BurgerMenu/index";
import Lang from "./Lang/index";

import "./styles.scss";

function Nav() {
  return (
    <section className="Nav">
        <BurgerMenu />
        <Lang />
    </section>
  );
}

export default Nav;