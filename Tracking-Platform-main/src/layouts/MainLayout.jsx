import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-[1200px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
