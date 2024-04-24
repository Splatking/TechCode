//interfaces
interface Setters {
    stateSetterFunctions: {
      setMenuBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setHomePageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setProductPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setAccountScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setDashboardScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setWorkersDashboardScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setLoginScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setCreateScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setWorkingByScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setTeamScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
      setJipVossVisible: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

//functions
function HideScreens(stateSetterFunctions: Setters['stateSetterFunctions']){
  stateSetterFunctions.setHomePageVisible(false);
  stateSetterFunctions.setProductPageVisible(false);
  stateSetterFunctions.setAccountScreenVisible(false);
  stateSetterFunctions.setDashboardScreenVisible(false);
  stateSetterFunctions.setWorkersDashboardScreenVisible(false);
  stateSetterFunctions.setWorkingByScreenVisible(false);
  stateSetterFunctions.setTeamScreenVisible(false);
  stateSetterFunctions.setJipVossVisible(false);
}

export type {Setters as Setters};
export {HideScreens};