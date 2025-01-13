import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')}; /* Hide when isVisible is false */
  flex-direction: column;
  position: relative;
  right: -600px;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
  background-color: #f2f2f2;
  border-radius: 10px;
  z-index: 10;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  
  &:focus {
    border-color: #007BFF;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007BFF;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true); 

  const SubmitApi = async (e) => {
    e.preventDefault();

    setLoading(true); 

    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });

      alert("Successfully logged in")

      setIsVisible(false);

      localStorage.setItem('token', response.data.token);

      setLoading(false);
      window.location.reload();
    } catch (error) {
      alert('Invalid username or password');
      setLoading(false);
    }
  };

  return (
    <InputContainer isVisible={isVisible}>
      <Input 
        type="text" 
        placeholder="Enter Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <Input 
        type="password" 
        placeholder="Enter Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button onClick={SubmitApi} disabled={loading}>
        {loading ? <LoadingSpinner /> : 'Login'}
      </Button>
    </InputContainer>
  );
}

export default LoginForm;
