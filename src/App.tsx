import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import CardPage from "./components/CardPage/CardPage";
import Gallery from "./components/Gallery/Gallery";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { CardsProvider } from "./providers/CardsProvider";

const App = () => (
  <CardsProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/intro" replace />} />
          <Route path="/intro" element={<Gallery isCardBack={false} />} />
          <Route path="/interact" element={<Gallery isCardBack={true} />} />
          <Route path="/card/:id" element={<CardPage />} />
          <Route path="/shulamit" element={<Navigate to="/intro" replace />} />
          <Route path="*" element={<Navigate to="/intro" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CardsProvider>
);

export default App;
