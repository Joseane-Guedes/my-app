/* import { useState } from "react";
import "../Checkbox/styles.css"

export default function Checkbox(props) {

  const [checked, setChecked] = useState(false);

  function toggle() {
    setChecked(!checked)
  }

  const checkedClass = checked ? "checked" : "";
  const containerClass = `checkbox ${checkedClass}`.trim()

  return (
    <div className={containerClass} onClick>{toggle}</div>
  )
}
 */