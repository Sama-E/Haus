import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "/src/assets/css/components/navbar.scss";

const NavBar = () => {

  const [active, setActive] = useState(false);
  const [openTab, setOpenTab] = useState(false);

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

  // Logged in user

  // const currentUser = {
  //   id:1,
  //   username:"John Doe",
  //   isCustomer: false,
  //   isPro: true
  // }

  const currentUser = {
    id:2,
    username:"Jane Foster",
    isCustomer: true,
    isPro: false,
  }

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
          {!currentUser?.isPro || currentUser?.isCustomer &&
            <span>Pro</span>
          }
          {!currentUser?.isCustomer || currentUser?.isPro &&
            <span>Customer</span>
          }
          {/* {!currentUser &&
            <span>Sign in</span>
          } */}
          {!currentUser &&
            <>
              <span>Sign in</span>
              <button>Join</button>
            </>
          }
          {currentUser && (
            <div className="user" onClick={()=>setOpenTab(!openTab)}>
              <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Profile Pic" />
              <span>{currentUser?.username}</span>
              { openTab &&             
              <div className="options">
                {currentUser?.isPro && (
                    <>
                      <Link className="link" to="/myprojects">Project</Link>
                      <Link className="link" to="/addproject">Add new project</Link>
                    </>
                )}
                <Link className="link" to="/orders">Orders</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" to="/logout">Logout</Link>
              
              </div>
              }
            </div>
          )}
        </div>
      </div>
      { (active || pathname !== "/") && (
      <>
        <hr />
        <div className="menu">
          <span>test</span>
          <span>test1</span>
        </div>
      </>
      )}
    </div>
  );
};

export default NavBar;