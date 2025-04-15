import { useState } from 'react';

const useLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  const handleFacebookLogin = () => {
    console.log("Login with Facebook");
  };

  const handleGoogleLogin = () => {
    console.log("Login with Google");
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isPasswordVisible,
    setPasswordVisible,
    handleLogin,
    handleFacebookLogin,
    handleGoogleLogin
  };
};

export default useLoginForm;
