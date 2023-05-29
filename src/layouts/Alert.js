import { DEFAULT_ERROR_DESCRIPTION, DEFAULT_ERROR_MESSAGE, DEFAULT_ERROR_SUGGESTION } from "../config/constants";

const Alert = ({
    type="info", 
    header=DEFAULT_ERROR_MESSAGE, 
    body=DEFAULT_ERROR_DESCRIPTION, 
    footer=DEFAULT_ERROR_SUGGESTION
  }) => {
    return <div className={`alert alert-${type}`} role="alert">
        <h4 className="alert-heading">{header}</h4>
        <p>{body}</p>
        <hr/>
        <p className="mb-0"><small>{footer}</small></p>
  </div>
}

export default Alert;