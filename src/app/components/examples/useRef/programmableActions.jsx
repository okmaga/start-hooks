import React, { useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef.current);
  }, [inputRef]);
  const handleClick = () => {
    inputRef.current.focus();
  };
  const handleSize = () => {
    inputRef.current.style.width = "300px";
    console.log(inputRef.current.clientWidth);
  };
    return (
        <CardWrapper>
          <SmallTitle className="card-title">
              Программируемые действия и свойства
          </SmallTitle>
          <Divider />
          <label htmlFor="email" className="form-label">Email</label>
          <input ref={inputRef} type="email" className="form-control" id="email" />
          <button className="btn btn-primary me-2" onClick={handleClick}>Focus</button>
          <button className="btn btn-secondary me-2" onClick={handleSize}>Change size</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
