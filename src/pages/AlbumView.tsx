import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { ImageGrid } from '@/components/ImageGrid';
import { ImageLightbox } from '@/components/ImageLightbox';
import { Button } from '@/components/ui/button';
import { mockAlbums, mockImages, Image } from '@/lib/mockData';
import { ArrowLeft, Upload, Mail, Settings } from 'lucide-react';

const AlbumView = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const album = mockAlbums.find((a) => a.id === id);
  const images = mockImages[id || ''] || [];

  if (!album) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation userType="photographer" />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Album not found</h1>
          <Link to="/photographer">
            <Button>Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="photographer" />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/photographer">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Albums
            </Button>
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{album.title}</h1>
              <p className="text-muted-foreground">
                {new Date(album.date).toLocaleDateString()} · {images.length} images
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Send Invite
              </Button>
              <Button>
                <Upload className="w-4 h-4 mr-2" />
                Upload Images
              </Button>
            </div>
          </div>
        </div>

        <ImageGrid images={images} onImageClick={setSelectedImage} />

        {selectedImage && (
          <ImageLightbox
            image={selectedImage}
            images={images}
            onClose={() => setSelectedImage(null)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </div>
  );
};

export default AlbumView;
