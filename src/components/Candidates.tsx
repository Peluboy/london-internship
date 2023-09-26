import React from "react";
import "../styles/dashboard.css";
import { Card, Checkbox, Divider } from "antd";
import { candidates } from "../assets/data/data";

const Candidates = () => {
  return (
    <div>
      <Card>
        <div className="candidates-header">
          <div className="candidates-header-left">
            <Checkbox>
              <p className="candidates-number">247 Candidates</p>
            </Checkbox>
          </div>
          <div className="candidates-header-right">
            <p>Qualifed</p>
            <Divider type="vertical" />
            <div className="candidates-count">
              <p>Tasks</p>
              <p className="tag-count">24</p>
            </div>
            <Divider type="vertical" />
            <div className="candidates-count">
              <p>Disqualified</p>
              <p className="tag-count">24</p>
            </div>
          </div>
        </div>
        <Divider />
        <ul>
          {candidates.map((candidate, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Divider />}
              <li className="candidates-list">
                <Checkbox></Checkbox>
                <div className="category-title">
                  <div className="candidate-image-title">
                    <img
                      src={candidate.avatar}
                      alt={candidate.name}
                      className="candidates-img"
                    />
                    <div className="candidate-details">
                      <p className="name">{candidate.name}</p>
                      <p className="location">{candidate.location}</p>
                      <p className="school">{candidate.school}</p>
                      <p className="hashtags">
                        {candidate.hashtags.map((tag, index) => (
                          <span key={index} className="hashtags">
                            {tag}
                          </span>
                        ))}
                      </p>
                      <p className="categoryTags-p">
                        {candidate.categoryTags.map((tag, index) => (
                          <span key={index} className="categoryTags">
                            {tag}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Candidates;
