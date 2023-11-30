// import SessionProvider, {  useSession } from 'next-auth/react';

function App() {
  // const { data: session } = useSession();
  return (
    <div className="App">
      <header className="App-header" data-testid="app-header">
      </header>
    <h1>home page</h1>
    {/* {session ? (
        <p>Welcome, {session.user.name}!</p>
      ) : (
        <p>You are not authenticated. Please <a href="/login">login</a>.</p>
      )} */}
   
    </div>
  );
}

export default App;
