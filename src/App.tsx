import ProtectedRoutes from "./routes/ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importing Layout
import Layout from "./Layout";

// importing pages
import Index from "./pages/Index";
import Write from "./pages/Write";
import About from "./pages/About";
import Auth from "./pages/Auth";



const App = () => {
  const isAuthenticated = false; // Replace with your authentication logic
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}
          >
            <Route path="/write" element={<Write />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
