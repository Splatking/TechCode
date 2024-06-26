//Watch this video: https://www.youtube.com/watch?v=SqcY0GlETPk
import { useState } from 'react';
import RenderMenuBar from "./components/ComponentsParts/Menubar/MenuBar";
import MainScreen from "./components/Pages/HomeMenu/HomeMenu";
import ProductsScreen from "./components/Pages/Products/Products";
import AccountScreen from "./components/Pages/Dashboard/UserDashboard/Dashboard";
import LoginScreen from "./components/Pages/LoginSystem/Login/Login";
import CreateScreen from "./components/Pages/LoginSystem/Create/Create";
import Dashboard from "./components/Pages/Dashboard/UserDashboard/Dashboard";
import WorkersDashboard from "./components/Pages/Dashboard/WorkersDashboard/WorkersDashboard";
import WorkingByScreen from "./components/Pages/WorkingBy/WorkingBy";
import RenderTeamScreen from "./components/Pages/Team/Team";
import JipVoss from "./components/Pages/JipVoss/JipVoss";
import Info from "./components/Pages/ContactInformation/Info";

function App() {
  const [isMenuBarVisible, setMenuBarVisible] = useState(true);
  const [isHomePageVisible, setHomePageVisible] = useState(true);
  const [isProductPageVisible, setProductPageVisible] = useState(false);
  const [isAccountScreenVisible, setAccountScreenVisible] = useState(false);
  const [isLoginScreenVisible, setLoginScreenVisible] = useState(false);
  const [isCreateScreenVisible, setCreateScreenVisible] = useState(false);
  const [isDashboardScreenVisbile, setDashboardScreenVisible] = useState(false);
  const [isWorkersDashboardScreenVisbile, setWorkersDashboardScreenVisible] = useState(false);
  const [isWorkingByScreenVisible, setWorkingByScreenVisible] = useState(false);
  const [isTeamScreenVisible, setTeamScreenVisible] = useState(false);
  const [isJipVossVisible, setJipVossVisible] = useState(false);
  const [isInfoVisible, setInfoVisible] = useState(false);

  const stateSetterFunctions = {
    setMenuBarVisible,
    setHomePageVisible,
    setProductPageVisible,
    setAccountScreenVisible,
    setLoginScreenVisible,
    setCreateScreenVisible,
    setDashboardScreenVisible,
    setWorkersDashboardScreenVisible,
    setWorkingByScreenVisible,
    setTeamScreenVisible,
    setJipVossVisible,
    setInfoVisible
  };

  return (
    <div id="Screen">
      {isHomePageVisible && <div className="MainScreen" id="HomePage"><MainScreen stateSetterFunctions={stateSetterFunctions}/></div>}
      {isProductPageVisible && <div className="MainScreen" id="ProductPage"><ProductsScreen /></div>}
      {isAccountScreenVisible && <div className="MainScreen" id="AccountScreen"><AccountScreen /></div>}
      {isWorkingByScreenVisible && <div className="MainScreen" id="WorkingByScreen"><WorkingByScreen stateSetterFunctions={stateSetterFunctions}/></div>}
      {isTeamScreenVisible && <div className="MainScreen" id="TeamScreen"><RenderTeamScreen /></div>}
      {isJipVossVisible && <div className="MainScreen" id="JipVossScreen"><JipVoss /></div>}
      {isInfoVisible && <div className="MainScreen" id="JipVossScreen"><Info /></div>}
      {isLoginScreenVisible && <div className="LoginHub" id="LoginScreen"><LoginScreen stateSetterFunctions={stateSetterFunctions}/></div>}
      {isCreateScreenVisible && <div className="LoginHub" id="CreateScreen"><CreateScreen stateSetterFunctions={stateSetterFunctions}/></div>}
      {isDashboardScreenVisbile && <div className="MainScreen" id="DashboardScreen"><Dashboard /></div>}
      {isWorkersDashboardScreenVisbile && <div className="MainScreen" id="DashboardScreen"><WorkersDashboard /></div>}
      {isMenuBarVisible && <div id="MenuBar"><RenderMenuBar stateSetterFunctions={stateSetterFunctions} /></div>}
    </div>
  );
}

export default App;