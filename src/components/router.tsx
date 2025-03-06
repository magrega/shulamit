import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CardPage from "./CardPage/CardPage";
import Gallery from "./Gallery/Gallery";
import Layout from "./Layout/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/intro" element={<Gallery isCardBack={false} />} />
      <Route path="/interact" element={<Gallery isCardBack={true} />} />
      <Route path="/" element={<Navigate to="/intro" replace />} />
      <Route path="/card/:id" element={<CardPage />} />
      <Route path="/shulamit" element={<Navigate to="/intro" replace />} />
      <Route path="*" element={<Navigate to="/intro" replace />} />
    </Route>
  )
);
