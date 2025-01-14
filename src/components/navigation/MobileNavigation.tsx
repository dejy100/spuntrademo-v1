import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PlusCircle, ShoppingBag, User, Shirt } from 'lucide-react';

const MobileNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Shirt, label: 'Wardrobe', path: '/wardrobe' },
    { icon: PlusCircle, label: 'Create', path: '/create' },
    { icon: ShoppingBag, label: 'Shop', path: '/shop' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="mobile-nav">
      <div className="nav-content">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={`touch-target ${
              location.pathname === path ? 'text-purple-600' : 'text-gray-600'
            }`}
          >
            <Icon size={24} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
