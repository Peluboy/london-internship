import React, { useState } from "react";
import "../styles/dashboard.css";
import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Card, Checkbox, Divider } from "antd";
import { filterCategories } from "../assets/data/data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Filter = () => {
  const [categoryDropdown, setCategoryDropdown] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCategoryDropdown = (categoryTitle: string) => {
    setCategoryDropdown({
      ...categoryDropdown,
      [categoryTitle]: !categoryDropdown[categoryTitle],
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-search">
        <Input
          placeholder="Search by name, edu, exp or #tag"
          style={{ border: "none", padding: "8px 12px" }}
          prefix={
            <SearchOutlined
              className="site-form-item-icon"
              style={{ marginRight: ".5rem", color: "#9AA6AC" }}
            />
          }
          suffix={<InfoCircleOutlined style={{ color: "#9AA6AC" }} />}
        />
      </div>
      <div className="filter-categories">
        <Card
          title="Filters"
          bordered={false}
          extra="0 Selected"
          style={{ width: "100%", fontSize: "14px" }}
        >
          <ul>
            {filterCategories.map((category, index) => (
              <React.Fragment key={index}>
                {index > 0 && <Divider />}
                <li>
                  <div
                    className="category-title"
                    onClick={() => toggleCategoryDropdown(category.title)}
                  >
                    <div className="category-image-title">
                      <img src={category.icon} alt={category.title} />
                      {category.title}
                    </div>
                    {category.items && category.items.length > 0 ? (
                      <span className="dropdown-icon">
                        {categoryDropdown[category.title] ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    ) : null}
                  </div>
                  {categoryDropdown[category.title] && (
                    <ul className="category-items">
                      {category.items?.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <Checkbox>
                            <span>{item}</span>
                          </Checkbox>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Filter;
