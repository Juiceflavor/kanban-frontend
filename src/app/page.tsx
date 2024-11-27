import './assets/styles/globals.css';
import NavBar from './components/templates/navBar';
import Home from './views/home-page';
import MyBoards from './views/my-boards';

function MyApp() {
  return (
    <>
      <NavBar />
      <MyBoards />
    </>
  );
}

export default MyApp;
