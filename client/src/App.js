import Header from "./components/Header";
import Tags from "./components/Tags";
import ProjectList from "./components/ProjectList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <Header />
      </header>
      <body className="app__body">
        <Tags />
        <ProjectList />
      </body>
    </div>
  );
}

export default App;
