import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';
import { Routers } from './src/routes';

export default function App() {
  return (
    <>
     <StatusBar style="light" />
     <Routers />
      {/* <Home/> */}
      {/* <Login/> */}
    </>
  );
}