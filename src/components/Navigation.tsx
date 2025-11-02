import { Link, useLocation } from 'react-router-dom';
import { Camera, User } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  userType?: 'photographer' | 'client' | null;
}

export const Navigation = ({ userType }: NavigationProps) => {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <Camera className="w-6 h-6" />
          <span>PhotoShare</span>
        </Link>

        <div className="flex items-center gap-4">
          {!userType && (
            <>
              <Link to="/photographer/login">
                <Button variant="ghost" size="sm">
                  Photographer Login
                </Button>
              </Link>
              <Link to="/client-login">
                <Button variant="outline" size="sm">
                  Client Access
                </Button>
              </Link>
            </>
          )}

          {userType === 'photographer' && (
            <div className="flex items-center gap-4">
              <Link to="/photographer">
                <Button
                  variant={location.pathname === '/photographer' ? 'default' : 'ghost'}
                  size="sm"
                >
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span>Alex Chen</span>
              </div>
            </div>
          )}

          {userType === 'client' && (
            <div className="flex items-center gap-2 text-sm">
              <User className="w-4 h-4" />
              <span>Client</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
