import { User, Package, PlusCircle, Users, Share2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const UserDashboard = () => {
  // Demo data for visitor analytics
  const visitorData = [
    { name: 'Mon', visitors: 2400 },
    { name: 'Tue', visitors: 1398 },
    { name: 'Wed', visitors: 3800 },
    { name: 'Thu', visitors: 3908 },
    { name: 'Fri', visitors: 4800 },
    { name: 'Sat', visitors: 3800 },
    { name: 'Sun', visitors: 4300 },
  ];

  return (
    <div className="min-h-screen  pt-20">
      <main className="max-w-7xl mx-auto p-6">
        {/* Welcome Message */}
        <div className="bg-gray-200 rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-slate-950 mb-2">Product Showcase Dashboard</h2>
          <p className="text-gray-600">Share your products and track visitor engagement</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Products</p>
                <h3 className="text-2xl font-bold text-slate-950">24</h3>
                <p className="text-green-500 text-sm">Active in catalog</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-full">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Visitors</p>
                <h3 className="text-2xl font-bold text-slate-950">1,483</h3>
                <p className="text-green-500 text-sm">This week</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-full">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Shares</p>
                <h3 className="text-2xl font-bold text-slate-950">286</h3>
                <p className="text-green-500 text-sm">Product links shared</p>
              </div>
              <div className="bg-green-50 p-3 rounded-full">
                <Share2 className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Visitor Analytics */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-lg font-semibold mb-4">Visitor Analytics</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="visitors" stroke="#4F46E5" fill="#EEF2FF" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Add Product Card */}
          <div className="bg-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <PlusCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">Add Product</h3>
              <p className="text-gray-600 text-sm">Add a new product to your showcase</p>
              <button className="w-full mt-4 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
                Add New Product
              </button>
            </div>
          </div>

          {/* View Catalog Card */}
          <div className="bg-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">My Catalog</h3>
              <p className="text-gray-600 text-sm">View and manage your products</p>
              <div className="w-full space-y-2">
                <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                  View Catalog
                </button>
                <button className="w-full px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                  Share Catalog Link
                </button>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-gray-100  p-3 rounded-full">
                <User className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-950">Profile</h3>
              <p className="text-gray-600 text-sm">Manage your showcase profile</p>
              <div className="w-full space-y-2">
                <button className="w-full px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
                  Edit Profile
                </button>
                <button className="w-full px-4 py-2 rounded-md border border-purple-600 text-purple-600 hover:bg-purple-50 transition">
                  Profile Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;