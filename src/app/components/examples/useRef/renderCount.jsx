import React, { useRef, useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
  const renderCount = useRef(0);
  const [otherState, setOtherState] = useState(false);

  useEffect(() => {
    renderCount.current++;
  });

  const toggleOtherState = () => {
    setOtherState(prev => !prev);
  };

    return (
        <CardWrapper>
          <SmallTitle>Подсчет количества рендеров</SmallTitle>
          <Divider />
          <p>Render count: {renderCount.current}</p>
          <button className="btn btn-primary" onClick={toggleOtherState}>Toggle Other State: {otherState.toString()}</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
