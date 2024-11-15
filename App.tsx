import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <>
     <StatusBar style="light" />
      <Home/>
      {/* <Login/> */}
    </>
  );
}