import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa6";

const Filter = () => {
  const [categoryList, setCategoryList] = useState<any[]>([]);
  useEffect(() => {
    axios.get("categories.json").then((data) => {
      setCategoryList(data.data);
    });
  }, []);
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-content">
          <ul className="list-group list-unstyled">
            {categoryList.map((category, key) => (
              <li className="list-group-iem" key={key}>
                <Link
                  to={`/products?id=${category.id}&categoryname=${category.name}`}
                  className="text-decoration-none filter-link d-flex gap-2 align-items-center"
                >
                  <span> {category.name}</span>{" "}
                  <FaArrowRight style={{ color: "#986a2f" }} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
