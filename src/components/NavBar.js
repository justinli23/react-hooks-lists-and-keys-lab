import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const jsxLinks = links.map((link) => {
    return <a href="#{link}" key={link}>{link}</a>
  })

  return <nav>
      {jsxLinks}
  </nav>;
}

export default NavBar;
