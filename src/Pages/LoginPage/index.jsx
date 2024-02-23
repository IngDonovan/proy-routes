import React, { useState } from 'react';
import { useAuth } from '../../auth';

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = useState('');
  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
    console.log(username);
  };

  return (
    <>
      <h1>LoginPage</h1> 
      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario</label>
        <input 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};



export { LoginPage };