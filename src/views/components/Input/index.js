import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as theme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { BasicInput, Input } from "../../../components";

const markdown = `
- __label?__  label on top of the input field 
- __labelClassName?__ class to customize label component
- __errors__ errors object from __react-hook-form__.
- __id?__ id to uniquely identify component
- __type?__ input type text  | email | password | number
- __errorClassName?__ style error text with custom style
- __validationSchema?__ custom validation schema for input

`;
function LoginFormWithBasicInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleValid(values) {
    console.log(values); // do something with it
  }

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <h2>Login Form</h2>
      <BasicInput
        id="email"
        errors={errors}
        register={register}
        type="email"
        placeholder="enter your email"
      />
      <BasicInput
        id="password"
        register={register}
        label="Password"
        type="password"
        placeholder="enter your password"
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleValid(values) {
    console.log(values); // do something with it
  }

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <h2>Login Form</h2>
      <Input
        id="email"
        errors={errors}
        register={register}
        label="Email"
        type="email"
        placeholder="enter your email"
      />
      <Input
        id="password"
        register={register}
        label="Password"
        type="password"
        placeholder="enter your password"
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export function InputView() {
  return (
    <div>
      <h1>Overview</h1>
      <p>
        <code>{"<Input />"}</code> and <code>{"<BasicInput />"}</code> are two
        components that can be used in replace of <code>{"<input />"}</code>{" "}
        tag.
      </p>

      <h2>Input component</h2>
      <p>
        This component is wrapped with other components such as{" "}
        <strong>labels</strong> and <strong>error</strong> text unlike{" "}
        <code>{"<BasicInput />"}</code>
      </p>
      <h3>Props</h3>
      <ReactMarkdown children={markdown}></ReactMarkdown>
      <h3>Examples</h3>
      <ul>
        <li>
          <h4>Login Form</h4>
          <SyntaxHighlighter showLineNumbers language={"jsx"} style={theme}>
            {`
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleValid(values) {
    console.log(values); // do something with it
  }

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <h2>Login Form</h2>
      <Input
        id="email"
        errors={errors}
        register={register}
        label="Email"
        type="email"
        placeholder="enter your email"
      />
      <Input
        id="password"
        register={register}
        label="Password"
        type="password"
        placeholder="enter your password"
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
      `}
          </SyntaxHighlighter>
        </li>
        <li>
          <h3>output</h3>
          <LoginForm />
        </li>
      </ul>
      <h2>BasicInput component</h2>
      <p>
        This component is some what similar to
        <code>{"<Input />"}</code> component with minor difference being, it
        wraps just a <strong>input</strong> tag with no other siblings. You can
        think of it as a pure form of <code>{"<input />"}</code> with more
        feature inbuilt.
      </p>
      <h3>Props</h3>
      <ReactMarkdown
        children={`
- type? input type (default: text)
- onErrorClassName? style error with custom class name
- errors error object
- className custom css with custom classname
- register react-hook-form register function
- id unique identifier
- validationSchema? to validate input value
        `}
      ></ReactMarkdown>
      <h3>Examples</h3>
      <h4>Login form</h4>
      <SyntaxHighlighter language={"tsx"} style={theme}>
        {`
function LoginFormWithBasicInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleValid(values) {
    console.log(values); // do something with it
  }

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <h2>Login Form</h2>
      <BasicInput
        id="email"
        errors={errors}
        register={register}
        type="email"
        placeholder="enter your email"
      />
      <BasicInput
        id="password"
        register={register}
        label="Password"
        type="password"
        placeholder="enter your password"
        errors={errors}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
      `}
      </SyntaxHighlighter>
      <h4>Output</h4>
      <LoginFormWithBasicInput />
    </div>
  );
}
