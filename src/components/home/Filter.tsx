import React from "react";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-content">
          <ul className="list-group list-unstyled">
            <li className="list-group-iem">
              <Link to="#" className="text-decoration-none filter-link">
                Women's Clothes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
