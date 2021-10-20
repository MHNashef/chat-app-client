import LoginForm from './components/LoginForm';

import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
