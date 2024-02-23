import React from 'react';


function LogoutPage() {
  const logout = (e) => {
    e.preventDefault();
    console.log('Salir');
  }
  
  return (
    <>
      <h1>LogoutPage</h1> 
      <form onSubmit={logout}>
        <label>Seguro de que quieres salir?</label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
};

export { LogoutPage };