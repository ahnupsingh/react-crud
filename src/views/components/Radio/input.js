import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Radio } from "../../../components";
import { COMPONENT_URL } from "../../../config/url";

function GenderRadio() {
  const items = [
    { id: "male", label: "Male", checked: true },
    {
      id: "female",
      label: "Female",
      checked: false,
    },
    {
      id: "non-binary",
      label: "Non Binary",
      checked: false,
    },
  ];
  return (
    <Radio
      defaultValues={items.reduce((prev, cur) => {
        prev[cur.id] = cur.checked;
        return prev;
      }, {})}
    >
      {({ values, handleChange }) => {
        console.log(values);
        return (
          <>
            {items.map((each) => (
              <Radio.Item
                key={each.id}
                id={each.id}
                label={each.label}
                onChange={handleChange}
                checked={values[each.id]}
              />
            ))}
          </>
        );
      }}
    </Radio>
  );
}

export function RadioView() {
  return (
    <div>
      <h1>Overview</h1>
      <p>
        <code>{"<Radio />"}</code>
        component is a wrapper around radio input tag with additional state
        management. This component is a container to the <strong>
          radio
        </strong>{" "}
        component. The API structure for this component is similar to{" "}
        <Link to={`${COMPONENT_URL.ROOT}/${COMPONENT_URL.CHECKBOX}`}>
          <code>{"<Checkbox />"}</code>
        </Link>
      </p>
      <p>
        The assumption made while creating this component is that a form might
        contain multiple radio buttons in a row. Therefore, this component helps
        to manage states of which radio button is active and which are not.
      </p>
      <p>
        As stated previously, this component is no more than a container to the
        radio input fields. In other words, you can manage your own radio input
        field, and add it inside this component as a children and still can
        manages the states.
      </p>

      <p>
        There is, however, an already built radio component inside{" "}
        <strong>Radio</strong> namespace. That is <code>{"Radio.Item"}</code>
      </p>

      <h3>Example</h3>
      <div className="row">
        <div className={"col-7"}>
          <h4>Code</h4>
          <SyntaxHighlighter language={"jsx"} style={theme}>
            {`
        <>
        <Radio.Item id={"male_1"} name={"gender"} label={"Male"} checked />
        <Radio.Item id={"female_1"} name={"gender"} label={"Female"} />
        </>
      `}
          </SyntaxHighlighter>
        </div>
        <div className={"col-5"}>
          <h4>Result</h4>
          {
            <>
              <Radio.Item
                id={"male_1"}
                name={"gender"}
                label={"Male"}
                checked
              />
              <Radio.Item id={"female_1"} name={"gender"} label={"Female"} />
            </>
          }
        </div>
      </div>
      <p>In the code snippets above, states should be managed by yourself</p>
      <p>
        Now, if you want to delgate task for state management to the container{" "}
        <code>{"<Radio />"}</code>. You can do so by wrapping around your
        checkbox components inside the <code>{"<Radio children={...} />"}</code>{" "}
        component.
      </p>
      <div className="row">
        <div className={"col-8"}>
          <h4>Code</h4>
          <SyntaxHighlighter language={"jsx"} style={theme}>
            {`
function GenderRadio() {
  const items = [
    { id: "male", label: "Male", checked: true },
    {
      id: "female",
      label: "Female",
      checked: false,
    },
    {
      id: "non-binary",
      label: "Non Binary",
      checked: false,
    },
  ];
  return (
    <Radio
      defaultValues={items.reduce((prev, cur) => {
        prev[cur.id] = cur.checked;
        return prev;
      }, {})}
    >
      {({ values, handleChange }) => {
        console.log(values);
        return (
          <>
            {items.map((each) => (
              <Radio.Item
                id={each.id}
                label={each.label}
                onChange={handleChange}
                checked={values[each.id]}
              />
            ))}
          </>
        );
      }}
    </Radio>
  );
}

// render the component
function App() {
  return <GenderRadio />
}
              `}
          </SyntaxHighlighter>
        </div>
        <div className={"col-4"}>
          <h4>Result</h4>
          <GenderRadio />
        </div>
      </div>
    </div>
  );
}
