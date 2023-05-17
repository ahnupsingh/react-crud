import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { signin } from '../../services/authService';
import Swal from 'sweetalert2';

const LoginForm = ({ setIsAuthenticated }) => {
  const initialValues = {
    // name: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    // Perform form submission logic here
    signin(values).then((result)=> {
        console.log("signin", result);
        if(result.status == 200){
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              localStorage.setItem('access_token', result.data.tokens.access_token);
              setIsAuthenticated(true);
    
              Swal.fire({
                icon: 'success',
                title: 'Successfully logged in!',
                showConfirmButton: false,
                timer: 1500,
              });
            },
          });
        }
        else {
          Swal.fire({
            timer: 1500,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Incorrect email or password.',
                showConfirmButton: true,
              });
            },
          });
        }
      })
    // Reset the form after successful submission
    resetForm();
  };

  const validateForm = values => {
    const errors = {};

    // if (!values.name) {
    //   errors.name = 'Name is required';
    // }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  return (
    <div>
      <h1>Admin Form</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <form>
          {/* <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div> */}

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="admin@example.com" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="qwerty" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Formik>
    </div>
  );
};

export default LoginForm;