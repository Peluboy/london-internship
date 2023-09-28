import React, { useState } from "react";
import "../styles/dashboard.css";
import { Card, Checkbox, Divider } from "antd";
import { candidates } from "../assets/data/data";
import Pagination from "./Pagination";

const Candidates = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const candidatePerPage = 5;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastCandidate = currentPage * candidatePerPage;
  const indexOfFirstCandidate = indexOfLastCandidate - candidatePerPage;
  const currentCandidates = candidates.slice(
    indexOfFirstCandidate,
    indexOfLastCandidate
  );

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
            <p>Qualified</p>
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
          {currentCandidates.map((candidate, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Divider />}
              <li className="candidates-list">
                <Checkbox></Checkbox>
                <div className="category-title">
                  <div className="candidate-image-title">
                    <div className="img-candidate-details">
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
                    <div className="candidate-programs">
                      {candidate.mediaAndNotebookPrograms &&
                        candidate.mediaAndNotebookPrograms.map(
                          (program, programIndex) => (
                            <div key={programIndex} className="program">
                              <img
                                src={program.icon}
                                alt={program.name}
                                className="program-icon"
                              />
                              <p className="program-name">{program.name}</p>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </Card>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(candidates.length / candidatePerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Candidates;
