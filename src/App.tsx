import { Fragment } from "react";
import "./App.css";
import { ListBooks } from "./components/List";
import { Filters } from "./components/Filters";

function App() {
  return (
    <Fragment>
      <Filters />
      <ListBooks />
    </Fragment>
  );
}

export default App;
