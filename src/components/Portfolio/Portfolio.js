import React, { useEffect, useState } from "react";
import "./Portfolio.css";
// import FiltaringPortfolio from "../FiltaringPortfolio/FiltaringPortfolio";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import { Link } from "react-router-dom";

// portfolio img load
// import clockwebsite from "../images/portfolio/clock.png";
const Portfolio = () => {
  // const [items, setItems] = useState(FiltaringPortfolio);
  // const filterItem = (categItem) => {
  //   const updatedItems = FiltaringPortfolio.filter((curElem) => {
  //     return curElem.category === categItem;
  //   });
  //   setItems(updatedItems);
  // };

  const [project, setProject] = useState([]);
  useEffect(() => {
    const url = "/project.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  console.log(project);
  return (
    <div className="container">
      <div className="portfolio_section p-5">
        <h2>Portfolio</h2>
        <div className="filter_btn">
          {/* <button onClick={() => setItems(FiltaringPortfolio)}>All</button>
          <button onClick={() => filterItem("react")}>React</button>
          <button onClick={() => filterItem("javascript")}>Javascript</button>
          <button onClick={() => filterItem("bootstrap")}>Bootstrap</button>
          <button onClick={() => filterItem("css")}>Html Css</button> */}
        </div>
        <div className="row">
          {/* {items.map((portfolio) => (
            <PortfolioItem
              key={portfolio.id}
              portfolio={portfolio}
            ></PortfolioItem>
          ))} */}

          {project.map((test) => (
            <PortfolioItem key={test.id} test={test}></PortfolioItem>
          ))}
        </div>
        <Link to="/prjectDetails">
          <button className="all_product">All Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
