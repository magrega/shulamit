import { Navigate, Route, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import CardPage from './CardPage/CardPage';
import Gallery from './Gallery/Gallery';
import Layout from './Layout/Layout';

export const router = createHashRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='/intro' element={<Gallery isCardBack={false} />} />
    <Route path='/interact' element={<Gallery isCardBack={true} />} />
    <Route
      path="/"
      element={<Navigate to="/intro" replace />}
    />
    <Route
      path="/shulamit"
      element={<Navigate to="/intro" replace />}
    />
    <Route
      path="/card/:id"
      element={<CardPage />} />
    <Route path="*" element={<Navigate to="/intro" replace />} />
  </Route>
))