import "/src/assets/css/components/featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1> Find the perfect services for your home.</h1>
          <div className="search">
            <div className="searchInput">
              <img src="" alt="" />
              <input type="text" placeholder="Search" />
            </div>
            <button>Search</button>
          </div>
          
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Featured;