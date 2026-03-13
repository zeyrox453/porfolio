import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: '1', paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
