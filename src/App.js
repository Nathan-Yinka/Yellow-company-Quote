import Header from "./component/Header";
import HeaderContent from "./component/HeaderContent";
import MainTable from "./component/MainTable";
import List from "./component/List";
import Signature from "./component/Signature";
function App(){
  return (
    <div className="App container-lg">
      <Header/>
      <HeaderContent/>
      <MainTable/>
      <List/>
      <Signature/>
    </div>
  );
}

export default App;
