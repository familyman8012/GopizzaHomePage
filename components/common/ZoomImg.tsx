import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

interface IZoomImg {
  imgUrl: string;
  imgWidth: number;
  imgHeight: number;
  zoomWidth: number;
  zoomHeight: number;
  initX: number;
  initY: number;
}

function ZoomImg({ imgUrl, imgWidth, imgHeight, zoomWidth, zoomHeight, initX, initY }: IZoomImg) {
  const [init, setInit] = useState(false);
  const [showMagnifier, setShowMagnifier] = useState(true);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: initX, y: initY });

  function handleMouseMove(e: any) {
    const container = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - container.left;
    const mouseY = e.clientY - container.top;
    if (mouseX < container.width && mouseY < container.height && mouseX > 0 && mouseY > 0) {
      setShowMagnifier(true);
    } else {
      setShowMagnifier(false);
    }
    setMagnifierPosition({ x: mouseX, y: mouseY });
  }

  useEffect(() => {
    if (!init) {
      setShowMagnifier(true);
      setMagnifierPosition({ x: initX, y: initY });
    }
  }, [init]);

  const magnifierStyle = {
    display: showMagnifier ? "block" : "none",
    left: (magnifierPosition.x - 75) / 10 + "rem",
    top: (magnifierPosition.y - 75) / 10 + "rem",
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: `${-((magnifierPosition.x * 2 - 75) / 10)}rem ${-((magnifierPosition.y * 2 - 75) / 10)}rem`,
    backgroundSize: `${(imgWidth * 2) / 10}rem ${(imgHeight * 2) / 10}rem`,
    backgroundColor: "#fff",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Waypoint onEnter={() => setInit(true)} onLeave={() => setInit(false)}>
      <div className="box_desc_img" style={{ position: "relative", width: imgWidth / 10 + "rem", height: imgHeight / 10 + 20 + "rem" }} onMouseMove={handleMouseMove}>
        <img src="https://dev-gopizza-homepage.s3.ap-northeast-2.amazonaws.com/ui/images/brand/howwemake/img_make1_2.webp" alt="zoomImg" />
        <div
          className="magnifier"
          style={{
            width: zoomWidth / 10 + "rem",
            height: zoomHeight / 10 + "rem",
            position: "absolute",
            border: "1px solid var(--color-orange)",
            ...magnifierStyle,
          }}
        />
      </div>
    </Waypoint>
  );
}

export default ZoomImg;
