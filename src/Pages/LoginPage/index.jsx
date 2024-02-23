import React, { useState } from 'react';


function LoginPage() {
  const [userName, setUserName] = useState('');
  const login = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  return (
    <>
      <h1>LoginPage</h1> 
      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario</label>
        <input 
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
};



export { LoginPage };