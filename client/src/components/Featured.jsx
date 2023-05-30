import "/src/assets/css/components/featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1> Find the perfect services for your home.</h1>
          <div className="search">
            <div className="searchInput">
              <img src="/images/search.png" alt="" />
              <input type="text" placeholder="Search" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Roofing</button>
            <button>Solar</button>
            <button>Kitchen Remodel</button>
            <button>Windows</button>
          </div>
        </div>
        <div className="right">
          <img src="/images/man.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured;