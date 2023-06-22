import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "/src/assets/css/components/navbar.scss";
import newRequest from '/src/utils/newRequest';

const NavBar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  //To keep Navbar white while in categories
  const {pathname} = useLocation();

  //Sticky navbar when scrolled
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // Logged in User
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));


  //Logout
  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className='container'>
        <div className='logo'>
        <Link to="/" className="link"> 
          <span className='text'>haus</span>
        </Link>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Explore</span>    
          <span>Search</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/images/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/myprojects">Service</Link>
                      <Link className="link" to="/addproject">Add New Service</Link>
                    </>
                )}
                <Link className="link" to="/contracts">Contracts</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" onClick={handleLogout}>Logout</Link>
              
              </div>
              )}
            </div>
          ) :  (
            <>
              <Link to="/login" className="link">Sign in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      { (active || pathname !== "/") && (
      <>
        <hr />
        <div className="menu">
          <Link className="link" to=""><span>Trends</span></Link>
          <Link className="link" to=""><span>Remodels</span></Link>
          <Link className="link" to=""><span>Maintenance</span></Link>
          <Link className="link" to=""><span>DYI</span></Link>
          <Link className="link" to=""><span>Home Tech</span></Link>
          <Link className="link" to=""><span>Safety and Security</span></Link>
        </div>
        <hr />
      </>
      )}
    </div>
  );
};

export default NavBar;