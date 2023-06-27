import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import CardPage from './CardPage/CardPage';
import Gallery from './Gallery/Gallery';
import Layout from './Layout/Layout';
import WorkGallery from './WorkGallery/WorkGallery';

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='/intro' element={<Gallery />} />
    <Route path='/interact' element={<WorkGallery />} />
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
      element={<CardPage />}/>
    <Route path="*" element={<Navigate to="/intro" replace />} />
  </Route>
))