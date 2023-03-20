import React from "react";

interface DialogProps extends React.HTMLProps<HTMLDialogElement> {
  children?: React.ReactNode;
}

const Dialog = React.forwardRef<HTMLDialogElement, DialogProps>((props, ref: any) => {
  const handleBackdropClick = (e: any) => {
    if (e.target === ref?.current) {
      e.stopPropagation(); // 이벤트 버블링 막기
      if (e.target === ref?.current) ref.current?.close();
    }
  };

  return (
    <dialog ref={ref} style={{ padding: 0 }}>
      <div onClick={handleBackdropClick}>{props.children}</div>
    </dialog>
  );
});
Dialog.displayName = "Dialog";

export default Dialog;
