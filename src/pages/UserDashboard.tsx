import {  User, Settings, Package, PlusCircle } from 'lucide-react';

const UserDashboard = () => {

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6 pt-8">
        {/* Welcome Message */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-slate-950 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Manage your products and account settings from your personal dashboard.</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Add Product Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-green-50 p-3 rounded-full">
                <PlusCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">Add Product</h3>
              <p className="text-gray-600 text-sm">List a new product for your store</p>
              <button className="w-full mt-4 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
                Add New Product
              </button>
            </div>
          </div>

          {/* View Products Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-50 p-3 rounded-full">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">My Products</h3>
              <p className="text-gray-600 text-sm">View and manage your product catalog</p>
              <button className="w-full mt-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                View Products
              </button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-purple-50 p-3 rounded-full">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">My Profile</h3>
              <p className="text-gray-600 text-sm">View and edit your profile details</p>
              <button className="w-full mt-4 px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-orange-50 p-3 rounded-full">
                <Settings className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">Settings</h3>
              <p className="text-gray-600 text-sm">Configure your account settings</p>
              <button className="w-full mt-4 px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition">
                Manage Settings
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;