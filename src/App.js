import "./App.css";
import { useState } from "react";
import avatar from "./avatar.png";

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleSideBar = () => {
    setIsActive(!isActive);
  };

  const navigationLinks = [
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-building",
      text: "Home",
      isActive: true,
    },
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-user",
      text: "People",
      count: 10,
    },
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-hard-drive",
      text: "Dashboard",
    },
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-lightbulb",
      text: "Performance",
      count: 20,
    },
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-paper-plane",
      text: "Development",
    },
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-chart-bar",
      text: "Reports",
    },
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-circle-user",
      text: "Admin",
    },
    {
      href: "https://github.com/shkholikov",
      iconClass: "fa-regular fa-life-ring",
      text: "Settings",
    },
  ];

  return (
    <>
      <section className={isActive ? "active" : ""}>
        <div className="button" onClick={toggleSideBar}>
          <i className="fa-solid fa-bars" />
        </div>
        <div className="sidebar">
          <div className="profile">
            <div className="pro_img">
              <img src={avatar} alt="profile_picture" />
            </div>
            <div className="pro_info">
              <h3>Shakhzod Kholikov</h3>
              <p>imshakhzod@gmail.com</p>
            </div>
          </div>
          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={link.isActive ? "active" : ""}
                >
                  <span className="icon">
                    <i className={link.iconClass} />
                  </span>
                  <span className="item">{link.text}</span>
                  {link.count && <span className="count">{link.count}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
