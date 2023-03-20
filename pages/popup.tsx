import { css } from "@emotion/react";
import Privacy from "ComponentsFarm/popup/Privacy";
import React, { useRef } from "react";

function Popup() {
  const popref = useRef<any>(null);
  const handleOpen = () => {
    popref.current?.showModal();
  };

  return (
    <div
      css={css`
        padding: 30px;
      `}
    >
      <button onClick={handleOpen}>열기</button>
      <Privacy popref={popref} index={0} />
    </div>
  );
}

export default Popup;
