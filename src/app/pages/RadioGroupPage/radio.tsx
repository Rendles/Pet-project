import React, { useRef, useState, useEffect } from "react";
import "./RadioGroup.css";

interface RadioGroupProps {
  options: string[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
  const [selected, setSelected] = useState(3);
  const [sliderStyle, setSliderStyle] = useState<{
    width: string;
    left: string;
  }>({ width: "0%", left: "0%" });
  const labelsRef = useRef<(HTMLLabelElement | null)[]>([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    const refs = labelsRef.current;
    if (refs[selected]) {
      const { offsetWidth, offsetLeft } = refs[selected]!;
      setSliderStyle({
        width: `${offsetWidth}px`,
        left: `${offsetLeft}px`,
      });
    }
  }, [selected]);

  useEffect(() => {
    isFirstRender.current = false
  }, []);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="radio-group-container">
      <div className="radio-group">
        {options.map((option, index) => (
          <label
            key={index}
            className="radio"
            onClick={() => handleSelect(index)}
            ref={(el) => (labelsRef.current[index] = el)}
          >
            {option}
          </label>
        ))}
        {!isFirstRender.current && <div className="slider" style={sliderStyle} />}
      </div>
    </div>
  );
};

export default RadioGroup;
