import React from 'react';
import { useForm } from 'react-hook-form';
import { signin } from '../../services/authService';
import Swal from 'sweetalert2';

const LoginForm = ({setIsAuthenticated}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("LoginForm submit", data);
    signin(data).then((result)=> {
        console.log("signin", result);
        if(result.status === 200){
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Name:
          <input type="text" {...register('name', { required: true })} />
        </label>
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label>
          Email:
          <input type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
        </label>
        {errors.email && (
          <span>
            {errors.email.type === 'required' ? 'This field is required' : 'Invalid email address'}
          </span>
        )}
      </div>
      <div>
        <label>
          Password:
          <input type="password" {...register('password', { required: true, minLength: 6 })} />
        </label>
        {errors.password && (
          <span>
            {errors.password.type === 'required'
              ? 'This field is required'
              : 'Password must have at least 6 characters'}
          </span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;