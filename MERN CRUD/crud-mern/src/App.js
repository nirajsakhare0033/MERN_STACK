
import {Route, Routes} from'react-router-dom'
import Dashboard from "./components/dashboard/Dashboard";
import Postuser from "./components/postuser/Postuser"
import Updateuser from "./components/updateuser/Updateuser"
import Nomatch from "./components/nomatch/Nomatch"
import Header from "./components/header/Header"
function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/user" element={<Postuser></Postuser>}></Route>
        <Route path="/user/:id" element={<Updateuser></Updateuser>}></Route>
        <Route path="*" element={<Nomatch></Nomatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
