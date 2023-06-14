import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Gallery from './Gallery/Gallery';
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
  </Route>
))