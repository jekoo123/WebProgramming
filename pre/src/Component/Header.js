import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header() {
  const [pagename, setPagename] = useState("Main Page");
  const location = useLocation();
  React.useEffect(() => {
    switch(location.pathname) {
      case "/proposal":
        setPagename("Proposal Page");
        break;
      // case "/team":
      //   setPagename("Team Introduction Page");
      
      default :
        setPagename("Main Page");
    }
  }, [location]);

  return (
    <div className="header">
      <div className="pagename">{pagename}</div>
      <div className="nav">
        <Link to="/">Main</Link>
        <Link to="/proposal">Proposal</Link>
        {/* <Link to="/team">team</Link> */}
      </div>
    </div>
  );
}

export default Header;





