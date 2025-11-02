import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockAlbums } from '@/lib/mockData';
import { Link } from 'react-router-dom';
import { Plus, Calendar, Image as ImageIcon, Tag } from 'lucide-react';

const PhotographerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="photographer" />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Albums</h1>
            <p className="text-muted-foreground">Manage your photography albums and client access</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Album
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAlbums.map((album) => (
            <Link key={album.id} to={`/photographer/album/${album.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{album.title}</CardTitle>
                    <Badge variant={album.visibility === 'public' ? 'default' : 'secondary'}>
                      {album.visibility}
                    </Badge>
                  </div>
                  <CardContent className="p-0 space-y-2">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(album.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <ImageIcon className="w-4 h-4" />
                        {album.imageCount}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {album.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-muted px-2 py-1 rounded flex items-center gap-1"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotographerDashboard;
