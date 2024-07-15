import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import classNames from "classnames";
import RadioGroup from "./radio";

export const RadioGroupPage = () => {

    const [leftPosition, setLeftPosition] = useState<boolean>(true)
    const [tabWidth, setTabWidth] = useState<number>(0)
    const [tabsRefWidth, setTabsRefWidth] = useState<number>(0)
const options = ["Опция 1", "Опция 2 очень длинная", "Опция 3", "Опция 4"]; // Можно добавить сколько угодно опций

    
    const tab = useRef<HTMLDivElement>(null)
    const tabsRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
      setTabWidth(tab.current?.clientWidth ?? 0)
      setTabsRefWidth(tabsRef.current?.clientWidth ?? 0)
    }, [tab]);

    
  return (
    <div className={"radio-page"}>
      <div className={"content-container"}>
        <RadioGroup options={options} />
        {/* <div className={"tabs-container"} ref={tabsRef} >
          <div className={classNames('active-tab')} style={{transform: `translateX(${leftPosition ? 0 : tabsRefWidth/2 + 4}px)`}} />
          <div className={"tab"} onClick={() => setLeftPosition(true)} ref={tab} >vaar 13453454435</div>
          <div className={"tab"} onClick={() => setLeftPosition(false)} >vaar 13453454435</div>
        </div> */}
      </div>
    </div>
  );
};
