import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Shield, Share2, Download } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Share Your Photography
              <br />
              <span className="text-muted-foreground">Securely & Beautifully</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The professional platform for photographers to deliver albums to clients with
              secure access, elegant galleries, and seamless downloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/photographer/login">
                <Button size="lg" className="w-full sm:w-auto">
                  <Camera className="w-5 h-5 mr-2" />
                  Get Started as Photographer
                </Button>
              </Link>
              <Link to="/client-login">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Client Login
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Secure Access</h3>
                <p className="text-sm text-muted-foreground">
                  Invite-only album access with client authentication
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Easy Sharing</h3>
                <p className="text-sm text-muted-foreground">
                  Send secure invite links to clients via email
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Bulk Downloads</h3>
                <p className="text-sm text-muted-foreground">
                  Clients can download single images or entire albums
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Beautiful Galleries</h3>
                <p className="text-sm text-muted-foreground">
                  Showcase your work with elegant, responsive layouts
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Photography Delivery
            </h2>
            <p className="text-muted-foreground mb-8">
              Join photographers who trust PhotoShare to deliver their work to clients with
              security, elegance, and ease.
            </p>
            <Link to="/photographer/login">
              <Button size="lg">Start Your Free Trial</Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 PhotoShare. Prototype Demo.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
