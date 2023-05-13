import React, { useEffect, useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100);
  const [otherState, setOtherState] = useState(false);
  const buttonColor = otherState ? "btn-primary" : "btn-secondary";
  function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  };

  const calculateFactorial = (n) => {
    console.log("calculating factorial");
    return factorial(n);
  };
  useEffect(() => {
    console.log("render button color");
  }, [buttonColor]);

  const fact = useMemo(() => calculateFactorial(value), [value]);
  return (
        <>
            <CardWrapper>
              <SmallTitle>Кэширование сложных вычислений</SmallTitle>
              <Divider />
              <p>Value: {value}</p>
              <p>Factorial: {fact}</p>
              <button className="btn btn-primary me-2" onClick={() => setValue(prev => prev + 10)}>Increment</button>
              <button className="btn btn-primary me-2" onClick={() => setValue(prev => prev - 10)}>Decrement</button>
            </CardWrapper>
            <CardWrapper>
              <SmallTitle>Зависимость от сторонних setState</SmallTitle>
              <Divider />
              <button className={"btn " + buttonColor} onClick={() => setOtherState(prev => !prev)}>Change other state {otherState.toString()}</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
