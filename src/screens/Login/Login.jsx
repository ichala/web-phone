import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../config/Auth/context';
import { signInWithGoogle } from '../../config/firebase';

function Login() {
  const user = useContext(AuthContext).currentUser;
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (user) {
      const returnUrl = searchParams.get('returnUrl');
      window.location.href = returnUrl || '/';
    }
  }, [user]);

  return (
    <div className="flex h-full items-center justify-center align-center">
      <button type="button" className="btn gap-3 glass btn-primary" onClick={signInWithGoogle}>
        <img style={{ height: '30px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/900px-Google_%22G%22_Logo.svg.png" alt="ggl" />
        Sign Up With Google
      </button>
    </div>
  );
}

export default Login;
