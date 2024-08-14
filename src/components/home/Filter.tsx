import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
                  to={`/products?id=${category.id}`}
                  className="text-decoration-none filter-link"
                >
                  {category.name}
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
