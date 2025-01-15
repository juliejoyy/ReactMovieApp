import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Details";
import About from "../routes/About"; // About 추가
import NavBar from "./NavBar"; // 화면 상단 메뉴바 추가
import Footer from "./Footer"; // 화면 하단 추가

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
