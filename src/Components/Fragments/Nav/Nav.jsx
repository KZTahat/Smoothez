import { useState } from "react";
import "./nav.css";

function Nav() {
  let [prevLink, setPrevLink] = useState(0);
  let nav_links = [
    { name: "HOME", selected: "home_selected", destination: "#" },
    { name: "SHOP", selected: "", destination: "#" },
    { name: "BLOG", selected: "", destination: "#" },
  ];

  function handleLickColor(idx) {
    let newLinks = document.getElementsByClassName("nav_link");
    if (idx == prevLink) return;
    newLinks[prevLink].removeAttribute("id");
    setPrevLink(idx);
    if (idx > 0) {
      newLinks[idx].setAttribute("id", "selected");
    } else {
      newLinks[idx].setAttribute("id", "home_selected");
    }
  }

  let [changeColor, setChangeColor] = useState(false);
  window.addEventListener("scroll", handleScroll);
  function handleScroll() {
    if (window.scrollY >= 126) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  }

  return (
    <>
      <nav className={`home_nav sticky${changeColor}`} id="home_nav">
        <ul>
          {nav_links.map((element, idx) => {
            return (
              <li key={idx}>
                <a
                  href={element.destination}
                  className="nav_link"
                  id={element.selected}
                  onClick={() => handleLickColor(idx)}
                >
                  {element.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="divider" />
    </>
  );
}

export default Nav;
