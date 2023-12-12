// components/TinySlider.js
import React, { forwardRef, useEffect, useState } from "react";
import { tns } from "tiny-slider/src/tiny-slider";

const TinySlider = forwardRef(({ children, options = {}, slider, setSlider }, ref) => {
  const [innerSlider, setInnerSlider] = useState(null);

  useEffect(() => {
    if (options && Object.keys(options).length > 0) {
      if (setSlider && slider !== undefined) {
        if (!slider) {
          setSlider(tns(options));
        }
      } else {
        if (!innerSlider) {
          setInnerSlider(tns(options));
        }
      }
    }
  }, [setSlider, slider, innerSlider, options]);

  return (
    <div className={`${options.container?.split(".")[1]} position-relative`} ref={ref}>
      {children}
    </div>
  );
});

export default TinySlider;
