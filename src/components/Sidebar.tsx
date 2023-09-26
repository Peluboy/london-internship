import { sidebarData } from "../assets/data/data";
import "../styles/sidebar.css";
import SettingsIcon from "../assets/images/settings.svg";
import { Tooltip } from "antd";
import { useState } from "react";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <section className="sidebar-container">
      <div className="sidebar-top">
        <div className="logo" />
        {sidebarData.map((item, index) => (
          <div
            className={`sidebar-icons ${index === activeItem ? "active" : ""}`}
            key={index}
            onClick={() => handleItemClick(index)}
          >
            <Tooltip title={item.title} placement="right">
              <img src={item.icon} alt={item.title} />
            </Tooltip>
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <Tooltip title="Settings" placement="right">
          <img src={SettingsIcon} alt="" className="settings-icon" />
        </Tooltip>
        <div className="initials">AS</div>
      </div>
    </section>
  );
};

export default Sidebar;
