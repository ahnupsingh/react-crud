import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../../context/AuthProvider';

const Logout = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      icon: 'question',
      title: 'Logging Out',
      text: 'Are you sure you want to log out?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then(result => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            localStorage.setItem('access_token', false);
            setUser(null);
            navigate('/login');
          },
        });
      }
    });
  };

  return (
    <button
      className="btn btn-outline-dark"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
