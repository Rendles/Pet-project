import React, { useRef, useState } from "react";
import "./style.scss";
import classNames from "classnames";

export const RadioGroupPage = () => {

    const [leftPosition, setLeftPosition] = useState<boolean>(false)
    const tab = useRef<HTMLDivElement>(null)
    console.log(tab)
  return (
    <div className={"radio-page"}>
      <div className={"content-container"}>
        <div className={"tabs-container"}>
          <div className={classNames('active-tab', leftPosition ? 'left' : '')} />
          <div className={"tab"} onClick={() => setLeftPosition(true)} ref={tab} >Variant 1</div>
          <div className={"tab"} onClick={() => setLeftPosition(false)} >Variant 2</div>
        </div>
      </div>
    </div>
  );
};
