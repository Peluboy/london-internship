import React, { useState } from "react";
import "../styles/header.css";
import { headerData, opportunities } from "../assets/data/data";
import { Tooltip, Dropdown, Menu } from "antd";
import dropDownIcon from "../assets/images/dropdown.svg";

const Header = () => {
  const items = [
    {
      key: "1",
      label: "Move to Interview I",
    },
    {
      key: "2",
      label: "Move to Interview II",
    },
    {
      key: "3",
      label: "Move to Interview III",
    },
  ];

  const [selectedOpportunity, setSelectedOpportunity] = useState(
    "Opportunity Browsing"
  );

  const opportunityMenu = (
    <Menu>
      {opportunities.map((item) => (
        <Menu.Item
          key={item.id}
          className={`opportunities-container ${
            selectedOpportunity === item.title ? "active" : ""
          }`}
          onClick={() => setSelectedOpportunity(item.title)}
        >
          <p>{item.title}</p>
          <div className="tag">{item.tags}</div>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header className="header-container">
      <div className="left-header">
        <h3>London Internship Program</h3>
        <p className="london-paragraph">London</p>
      </div>
      <div className="middle-header">
        <Dropdown overlay={opportunityMenu} trigger={["hover"]}>
          <div className="dropdown">
            <p className="dropdown-list">{selectedOpportunity}</p>
            <img src={dropDownIcon} alt="" />
          </div>
        </Dropdown>
      </div>
      <div className="right-header">
        {headerData.map((item, index) => (
          <div className="header-icons" key={index}>
            <Tooltip title={item.title} placement="bottom">
              <img src={item.icon} alt={item.title} />
            </Tooltip>
          </div>
        ))}
        <Dropdown.Button menu={{ items }} type="primary">
          Move to Interview I
        </Dropdown.Button>
      </div>
    </header>
  );
};

export default Header;
