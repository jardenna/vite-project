import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Title } from './enums';
import useDocumentTitle from './hooks/useDocumentTitle';
import Home from './pages/vans/Home';
import About from './pages/vans/About';
import VanDetails from './pages/vans/VanDetails';
import Layout from './layout/Layout';
import Income from './pages/vans/host/Income';
import Review from './pages/vans/host/Review';
import HostLayout from './layout/HostLayout';
import DashboardLayout from './layout/DashboardLayout';
import Vans from './pages/vans/Vans';
import Hostvans from './pages/vans/host/Hostvans';
import HostVanDetailLayout from './layout/HostVanDetailLayout';
import vans from './pages/vans/data';
import HostVanInfo from './pages/vans/host/HostVanInfo';
import HostVanPhoto from './pages/vans/host/HostVanPhoto';
import HostVanPricing from './pages/vans/host/HostVanPricing';

function App() {
  useDocumentTitle(Title.Home);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<HostLayout />}>
            <Route index element={<DashboardLayout />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<Hostvans />} />
            <Route
              path="vans/:id"
              element={<HostVanDetailLayout vans={vans} />}
            >
              <Route index element={<HostVanInfo />} />
              <Route path="photo" element={<HostVanPhoto />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>

            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
