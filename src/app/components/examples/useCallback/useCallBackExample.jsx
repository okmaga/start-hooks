import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
  const [data, setData] = useState({});
  const withoutCallback = useRef(0);
  const withCallback = useRef(0);
  const handleChange = ({ target }) => {
    setData(prev => ({ ...prev, [target.name]: target.value }));
  };
  const validateWithoutCallback = (data) => {
    console.log(data);
  };
  useEffect(() => {
    withoutCallback.current++;
  }, [validateWithoutCallback]);

  const validateWithCallback = useCallback((data) => {
      console.log(data);
    }, []);
  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallback]);

  useEffect(() => {
    validateWithoutCallback(data);
    validateWithCallback(data);
  }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
          <p>Render without callback: {withoutCallback.current}</p>
          <p>Render with callback: {withCallback.current}</p>
          <label htmlFor="email" className="form-label">Email</label>
          <input name="email" type="email" className="form-control" id="email" value={data.email || ""}onChange={handleChange}/>
        </CardWrapper>
    );
};

export default UseCallBackExample;
