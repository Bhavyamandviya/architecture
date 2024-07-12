import React, { useEffect, useState } from "react";

const ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  // expected format for visual parts
  visualParts = [
    {
      percentage: "0%",
      color: "red",
    },
  ],
  width,
}) => {
  const [windowWidth, setwindowWidth] = useState("0%");
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (scrollTop / windowHeight) * 100;
      setwindowWidth(`${scroll}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (Math.floor(windowWidth) === 31 || Math.floor(windowWidth) === 45) {
        setWidths(
          visualParts.map((item) => {
            return item.percentage;
          })
        );
      } else if (Math.floor(windowWidth) < 32) {
        setWidths(
          visualParts?.map(() => {
            return 0;
          })
        );
      }
    });
  }, [visualParts, windowWidth]);

  // console.log(windowWidth, "chek");

  return (
    <>
      {/* <div className="progressLabel">{label}</div> */}
      <div className="tipWrap">
        <span className="prosses-bar">{label}</span>

        <span className="tip">{widths}</span>
      </div>
      <div
        className="progressVisualFull fill"
        style={{
          backgroundColor: "white",
        }}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index] || windowWidth,

                backgroundColor: item.color,
              }}
              className="progressVisualPart"
            />
          );
        })}
      </div>
    </>
  );
};

export default ProgressLine;
