 import react,{useEffect} from "react";
 import 'materialize-css/dist/css/materialize.min.css';
 import M from 'materialize-css/dist/js/materialize.min.js';
 import AppNavbar from "./components/layout/AppNavbar";
 import Logs from "./components/logs/Logs";
 import Addbtn from "./components/layout/Addbtn";
 import AddLogModal from "./components/logs/AddLogModal";
 import EditLogModal from "./components/logs/EditLogModal";
 import AddTechModal from "./components/techs/AddTechModal";
 import TechListModal from "./components/techs/TechListModal";
 import { Provider } from "react-redux";
 import store from "./store";
const App=()=> {
  useEffect(()=>{
    //init Materialize JS
      M.AutoInit();
  })
  return (
     //add store
    <Provider store={store}>
    < >
    {/*search bar */}
     <AppNavbar/>
     <div className="container">
        <Addbtn/>
        <EditLogModal/>
        <AddLogModal/>
        <AddTechModal/>
        <TechListModal/>
        <Logs/>
     </div>
    </>
    </Provider>
  );
}

export default App;
