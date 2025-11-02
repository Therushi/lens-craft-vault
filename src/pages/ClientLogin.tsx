import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ClientLogin = () => {
  const [searchParams] = useSearchParams();
  const inviteToken = searchParams.get('token');
  const [clientId, setClientId] = useState(searchParams.get('clientId') || '');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    toast({
      title: 'Access granted',
      description: 'Welcome to your album!',
    });
    // In a real app, this would redirect to the specific album they were invited to
    navigate('/client/album/album-1');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Client Access</CardTitle>
            <CardDescription>
              {inviteToken
                ? 'You have been invited to view an album. Please log in to continue.'
                : 'Enter your client ID and password to access your albums'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="clientId">Client ID</Label>
                <Input
                  id="clientId"
                  placeholder="e.g., CLIENT-12345"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Access Album
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Demo: Use any client ID/password
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientLogin;
