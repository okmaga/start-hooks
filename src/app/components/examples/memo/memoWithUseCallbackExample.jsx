import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
      console.log("render logout button");
    });
    return <button className="btn btn-primary">Log Out</button>;
};
LogOutButton.propTypes = {
  onLogOut: PropTypes.func
};

const MemoizedLogOutButton = React.memo(LogOutButton);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState();
    const handleLogOut = useCallback((props) => {
      localStorage.removeItem("auth");
    }, [props]);
    return (
      <>
          <button className="btn btn-primary" onClick={() => setState(!state)}>Re-render</button>
          <MemoizedLogOutButton onLogOut={handleLogOut}/>
      </>
    )
    ;
};

export default MemoWithUseCallbackExample;
