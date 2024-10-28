import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, ShoppingBag, Settings } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../../libs/firebase';

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 pt-40">
      {/* Dashboard Header */}
      <header className="w-full max-w-3xl flex items-center justify-between mb-8  p-4">
        <h1 className="text-2xl font-semibold text-slate-950">Welcome to Your Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 transition"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </header>

      {/* Dashboard Content */}
      <section className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
        {/* Profile */}
        <div className="p-6 bg-gray-200 rounded-lg shadow text-center space-y-4">
          <User className="w-10 h-10 mx-auto text-slate-950" />
          <h2 className="text-xl font-semibold text-slate-950">My Profile</h2>
          <p className="text-gray-600">View and edit your profile details</p>
          <button className="mt-4 px-4 py-2 rounded-md bg-slate-950 text-white hover:bg-slate-800 transition">
            Go to Profile
          </button>
        </div>

        {/* Orders */}
        <div className="p-6 bg-gray-200 rounded-lg shadow text-center space-y-4">
          <ShoppingBag className="w-10 h-10 mx-auto text-slate-950" />
          <h2 className="text-xl font-semibold text-slate-950">My Orders</h2>
          <p className="text-gray-600">Manage your order history and track shipments</p>
          <button className="mt-4 px-4 py-2 rounded-md bg-slate-950 text-white hover:bg-slate-800 transition">
            View Orders
          </button>
        </div>

        {/* Settings */}
        <div className="p-6 bg-gray-200 rounded-lg shadow text-center space-y-4">
          <Settings className="w-10 h-10 mx-auto text-slate-950" />
          <h2 className="text-xl font-semibold text-slate-950">Settings</h2>
          <p className="text-gray-600">Configure your account settings</p>
          <button className="mt-4 px-4 py-2 rounded-md bg-slate-950 text-white hover:bg-slate-800 transition">
            Account Settings
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
