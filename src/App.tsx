import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  EducationLevel,
  MainLayout,
  Olympics,
  Remember,
  TechnicalAndHigher,
} from "./containers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<EducationLevel />} />
          <Route
            path="/technical-and-higher"
            element={<TechnicalAndHigher />}
          />
          <Route path="/remember" element={<Remember />} />
          <Route path="/olympics" element={<Olympics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
