import React from 'react';
import "/src/assets/css/pages/pros/services.scss";
import { useState } from "react";
import ServiceCard from "/src/components/cards/ServiceCard";
import { services } from "/src/data.js";

const Services = () => {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  return (
    <div className="services">
      <div className="container">
        <span className="breadcrumbs">.HAUS / HOUSE & HOME </span>
        <h1>House Stuff</h1>
        <p>
          Turn your house into a home with .HAUS
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="text" placeholder='min' />
            <input type="text" placeholder='max' />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by:</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./images/down.png" alt="" onClick={() => setOpen(!open)}/>
          {open && (<div className="rightMenu">
              {sort === "sales" ? (
              <span onClick={() =>reSort("created_at") }>Newest</span>
              ) : (
              <span onClick={() =>reSort("sales") }>Best Selling</span>
              )}
              <span onClick={() => reSort("sales")}>Popular</span>
            </div>
            )}
          </div>
        </div>
        <div className="cards">
          {services.map((service) => (
            <ServiceCard key={service.id} item={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;