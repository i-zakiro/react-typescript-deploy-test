import {
  Route,
  Routes
} from "react-router-dom";
import Navigation from "./components/Navigation";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
return (
  <>
    <Navigation />
    <Routes>
      <Route path="react-typescript-deploy-test/" element={<ProductsPage />} />
      <Route path="react-typescript-deploy-test/about" element={<AboutPage />} />
    </Routes>
  </>
)
}

export default App;
