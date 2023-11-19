import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Introduction from "./pages/Introduction";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Introduction />}></Route>
        <Route path="/:title" element={<Detail />}></Route>
      </Routes>
    </>
  );
}

export default App;
