import { Link, Outlet } from "react-router-dom";
import { COMPONENT_URL } from "../../config/url";

export function ComponentView() {
  return (
    <div className="container">
      <nav
        className="navbar-light bg-dark p-2"
        style={{ background: "white", width: "100%" }}
      >
        <h2 className="text-white">Component Example</h2>
      </nav>
      <div className="row">
        <div className={"col-2"} style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Link to={COMPONENT_URL.INPUT}>Input</Link>
          <Link to={COMPONENT_URL.CHECKBOX}>Checkbox</Link>
          <Link to={COMPONENT_URL.RADIO}>Radio</Link>
        </div>
        <div className={"col-10"}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
