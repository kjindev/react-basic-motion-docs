import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Introduction from "./pages/Introduction";
import GetStart from "./pages/GetStart";
import Animation from "./pages/Animation";
import Loading from "./pages/Loading";

function App() {
  return (
    <div className="flex">
      <NavBar />
      <Routes>
        <Route path="/" element={<Introduction />}></Route>
        <Route path="/getstart" element={<GetStart />}></Route>
        <Route path="/animation/:title" element={<Animation />}></Route>
        <Route path="/loading/:title" element={<Loading />}></Route>
      </Routes>
    </div>
  );
}

export default App;
