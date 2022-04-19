import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  //do not rendering unless props changed
  const { open, clickClose } = props;
  console.log("CHILD");

  const data = [...Array(20).keys()];
  data.forEach((n) => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>CHILD</p>
          <button onClick={clickClose}>CLOSE</button>
        </div>
      ) : null}
    </>
  );
});
