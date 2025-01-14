import React from 'react';
import { Home, ShoppingBag, Shirt, Gamepad2, PenTool } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import TrendAlert from './TrendAlert';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center -ml-2">
            <img 
              src="/images/branding/spuntra-logo.png" 
              alt="Spuntra" 
              className="h-28 w-auto cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => navigate('/')}
            />
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-8">
              <NavLink 
                icon={<Home size={20} />} 
                text="Home" 
                onClick={() => navigate('/')}
                active={isActive('/')}
              />
              <NavLink 
                icon={<ShoppingBag size={20} />} 
                text="Shop" 
                onClick={() => navigate('/shop')}
                active={isActive('/shop')}
              />
              <NavLink 
                icon={<Shirt size={20} />} 
                text="Wardrobe" 
                onClick={() => navigate('/wardrobe')}
                active={isActive('/wardrobe')}
              />
              <NavLink 
                icon={<PenTool size={20} />} 
                text="Create" 
                onClick={() => navigate('/create')}
                active={isActive('/create')}
              />
              <NavLink 
                icon={<Gamepad2 size={20} />} 
                text="Play & Win" 
                onClick={() => navigate('/play')}
                active={isActive('/play')}
              />
            </div>
            <div className="flex items-center ml-4 mr-4">
              <TrendAlert />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}