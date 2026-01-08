import { LayoutDashboard, ShoppingCart, BarChart3, Settings, ChevronDown } from 'lucide-react';

export default function Navigation() {
  return (
    <nav className="bg-slate-800 text-white sticky">
      <div className="max-w-360 mx-auto px-8 h-14 flex items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex items-center gap-3">
          <div className="text-3xl">🥐</div>
          <span className="font-semibold text-lg">Bakery Inventory</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ShoppingCart className="w-4 h-4" />
            <span>Orders</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <BarChart3 className="w-4 h-4" />
            <span>Reports</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </a>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-sm font-semibold">S</span>
          </div>
          <span className="text-sm">Sarah</span>
          <ChevronDown className="w-4 h-4 text-slate-300" />
        </div>
      </div>
    </nav>
  );
}