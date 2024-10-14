import { BudgetApp } from "./pages/BudgetApp";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom';

import NavBar from "./components/Global/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="budget-app" element={<BudgetApp />} />
      </Routes>
    </div>

  );
}

export default App;
