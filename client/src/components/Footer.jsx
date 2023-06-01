import "/src/assets/css/components/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Roofing & Gutters</span>
            <span>Siding</span>
            <span>Windows</span>
            <span>Doors</span>
            <span>Solar</span>
            <span>AC & Heating</span>
            <span>Flooring</span>
            <span>Bathrooms</span>
            <span>Kitchens</span>
            <span>Home Security</span>
            <span>Landscaping</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on .Haus</span>
            <span>Buying on .Haus</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From .Haus</h2>
            <span>.Haus Business</span>
            <span>.Haus Pro</span>
            <span>.Haus Guides</span>
            <span>Get Inspired</span>
            <span>.Haus Project Planner</span>
            <span>DYI</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>.Haus</h2>
            <span>© .Haus International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/images/twitter.png" alt="" />
              <img src="/images/facebook.png" alt="" />
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/pinterest.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/images/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;