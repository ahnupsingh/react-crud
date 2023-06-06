import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CheckBox } from "../../../components";

function ProgrammingLanguageCheckbox() {
  const items = [
    { id: "java", label: "JAVA", checked: false },
    {
      id: "python",
      label: "PYTHON",
      checked: false,
    },
    {
      id: "javascript",
      label: "JAVASCRIPT",
      checked: true,
    },
  ];
  return (
    <CheckBox
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
              <CheckBox.Item
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
    </CheckBox>
  );
}

export function CheckboxView() {
  return (
    <div>
      <h1>Overview</h1>
      <p>
        <code>{"<Checkbox />"}</code>
        component is a wrappr around checkbox input tag with additional state
        management. This component is a container to the{" "}
        <strong>checkbox</strong> tag.
      </p>
      <p>
        The assumption made while creating this component is that a form might
        contain multiple checkboxes in a row. Therefore, this component helps to
        manage states of whose checkboxes are <strong>checked</strong> and which
        are not.
      </p>
      <p>
        As stated previously, this component is no more than a container to the
        checkbox. In other words, you can manage your own checkboxes, and add it
        inside this component as a children and still can manages the states.
      </p>

      <p>
        There is, however, an already built checkbox component inside{" "}
        <strong>Checkbox</strong> namespace. That is{" "}
        <code>{"Checkbox.Item"}</code>
      </p>

      <h3>Example</h3>
      <div className="row">
        <div className={"col-7"}>
          <h4>Code</h4>
          <SyntaxHighlighter language={"jsx"} style={theme}>
            {`
        <>
        <CheckBox.Item id={"apple"} label={"Apple"} />
        <CheckBox.Item id={"banana"} label={"Banana"} checked />
        </>
      `}
          </SyntaxHighlighter>
        </div>
        <div className={"col-5"}>
          <h4>Result</h4>
          {
            <>
              <CheckBox.Item id={"apple"} label={"Apple"} />
              <CheckBox.Item id={"banana"} label={"Banana"} checked />
            </>
          }
        </div>
      </div>
      <p>
        In the code snippets above states should be manage by yourself. There is
        no way react knows, whose components is checked and whose is not.
        Therefore, component being checked and unchecked should by manage by
        yourself.
      </p>
      <p>
        Now, if you want to delgate task for state management to the container{" "}
        <code>{"<CheckBox />"}</code>. You can do so by wrapping around your
        checkbox components inside the <code>{"<CheckBox />"}</code> component.
      </p>
      <div className="row">
        <div className={"col-8"}>
          <h4>Code</h4>
          <SyntaxHighlighter language={"jsx"} style={theme}>
            {`
function ProgrammingLanguageCheckbox() {
  const items = [
    { id: "java", label: "JAVA", checked: false },
    {
      id: "python",
      label: "PYTHON",
      checked: false,
    },
    {
      id: "javascript",
      label: "JAVASCRIPT",
      checked: true,
    },
  ];
  return (
    <CheckBox
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
              <CheckBox.Item
                id={each.id}
                label={each.label}
                onChange={handleChange}
                checked={values[each.id]}
              />
            ))}
          </>
        );
      }}
    </CheckBox>
  );
}

// render the component
function App() {
  return <ProgrammingLanguageCheckbox />
}
              `}
          </SyntaxHighlighter>
        </div>
        <div className={"col-4"}>
          <h4>Result</h4>
          <ProgrammingLanguageCheckbox />
        </div>
      </div>
    </div>
  );
}
