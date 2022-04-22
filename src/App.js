import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import { InlineStyle } from "./components/InlineStyle";
import { CssModules } from "./components/CssModules";

import "./styles.css";

export default function App() {
  console.log("App");
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const changeText = (e) => setText(e.target.value);
  const toggle = () => setOpen(!open);
  const clickClose = useCallback(() => setOpen(false), []); //do not regenerate func untill value in the [] changed
  const temp = useMemo(() => 1 + 2, []);

  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={changeText} />
      <p>{text}</p>
      <InlineStyle />
      <CssModules />
      <button onClick={toggle}>SHOW</button>
      <ChildArea open={open} clickClose={clickClose} />
    </div>
  );
}
