import "/src/assets/css/components/businesssolutions.scss";

const BusinessSolutions = () => {
  return (
    <div className="businessSolutions">
      <div className="container">

        <div className="left">
          <h1>
            .haus <i>business</i>
          </h1>
          <h1>
            A business solution designed for <i>teams</i>
          </h1>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>

          <div className="title">
            <img src="./images/check.png" alt="" />
            Connect to freelancers with proven business experience
          </div>

          <div className="title">
            <img src="./images/check.png" alt="" />
            Get matched with the perfect talent by a customer success manager
          </div>

          <div className="title">
          <img src="./images/check.png" alt="" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button>Explore .haus Business</button>
        </div>

        <div className="right">
          
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>

      </div>
    </div>
  )
}

export default BusinessSolutions;