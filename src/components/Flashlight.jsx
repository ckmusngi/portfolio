import { useState } from "react";

/**
 * Dark mode starts with the lights out: styles.css hides the page below the
 * header until data-flashlight="on". Only rendered visibly in dark mode.
 */
export default function Flashlight() {
  const [on, setOn] = useState(false);

  const toggle = () => {
    const next = !on;
    document.documentElement.dataset.flashlight = next ? "on" : "off";
    setOn(next);
  };

  return (
    <div className="flashlight-rig">
      <span className="flashlight-beam" aria-hidden="true" />
      <button
        className="flashlight"
        onClick={toggle}
        aria-label={`Turn ${on ? "off" : "on"} the flashlight`}
      >
        <span className="flashlight-tail" />
        <span className="flashlight-body">
          <span className="flashlight-switch" />
        </span>
        <span className="flashlight-head" />
        <span className="flashlight-lens" />
      </button>
      <p className="flashlight-hint">
        It's dark in here.
        <span>Turn on the flashlight to see my work.</span>
      </p>
    </div>
  );
}
