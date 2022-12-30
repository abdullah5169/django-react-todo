import "./App.css";
import Header from "./components/Header";
import TasksListPage from "./pages/TasksListPage";
import TaskPage from "./pages/TaskPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="app">
          <Header/>
          <Routes>
            <Route path="/" exact element={<TasksListPage />} />
            <Route path="/task/:id" element={<TaskPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
