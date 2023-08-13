import {Fragment} from "react";
import "./App.css";
import {ListBooks} from "./components/List";
import {Header} from "./components/Header";
import {Filters} from "./components/Filters";

function App() {
  return (
    <Fragment>
      <Header />
      <ListBooks />
    </Fragment>
  );
}

export default App;
