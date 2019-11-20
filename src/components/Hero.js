import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// ! Setting a defaultProps for the hero
Hero.defaultProps = {
  hero: "defaultHero"
};
