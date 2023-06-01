import { useState } from "react";
import "/src/assets/css/pages/pros/contracts.scss";
import ContractCard from "/src/components/cards/ContractCard";
import { contracts, projects } from "/src/data.js";




const Contracts = () => {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  }

  return (
    <div className="contracts">
      <div className="container">
        <span className="breadcrumbs">.HAUS / HOUSE & HOME </span>
        <h1>House Stuff</h1>
        <p>
          Turn your house into a home with .HAUS
        </p>
        <div className="menu">
          <div className="left">
            <span>Budge</span>
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
          {contracts.map((contract) => (
            <ContractCard key={contract.id} item={contract} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contracts;