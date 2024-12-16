import Sidebar from '../sidebar/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 ml-64 pt-16 px-8 w-full">{children}</main>
    </div>
  );
};

export default MainLayout;
