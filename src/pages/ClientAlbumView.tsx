import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { ImageGrid } from '@/components/ImageGrid';
import { ImageLightbox } from '@/components/ImageLightbox';
import { Button } from '@/components/ui/button';
import { mockAlbums, mockImages, Image } from '@/lib/mockData';
import { Download, CheckSquare } from 'lucide-react';

const ClientAlbumView = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());
  const [selectMode, setSelectMode] = useState(false);

  const album = mockAlbums.find((a) => a.id === id);
  const images = mockImages[id || ''] || [];

  if (!album) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation userType="client" />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Album not found</h1>
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

  const toggleSelectMode = () => {
    setSelectMode(!selectMode);
    if (selectMode) {
      setSelectedImages(new Set());
    }
  };

  const handleBulkDownload = () => {
    // Mock bulk download
    alert(`Preparing download of ${selectedImages.size} images...`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType="client" />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{album.title}</h1>
              <p className="text-muted-foreground">
                {new Date(album.date).toLocaleDateString()} · {images.length} images
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={toggleSelectMode}>
                <CheckSquare className="w-4 h-4 mr-2" />
                {selectMode ? 'Cancel' : 'Select Images'}
              </Button>
              {selectMode && selectedImages.size > 0 && (
                <Button onClick={handleBulkDownload}>
                  <Download className="w-4 h-4 mr-2" />
                  Download {selectedImages.size} Images
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative">
              <button
                onClick={() => !selectMode && setSelectedImage(image)}
                className="aspect-square w-full overflow-hidden bg-muted hover:opacity-90 transition-opacity"
              >
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
              {selectMode && (
                <div className="absolute top-2 right-2">
                  <input
                    type="checkbox"
                    checked={selectedImages.has(image.id)}
                    onChange={(e) => {
                      const newSelected = new Set(selectedImages);
                      if (e.target.checked) {
                        newSelected.add(image.id);
                      } else {
                        newSelected.delete(image.id);
                      }
                      setSelectedImages(newSelected);
                    }}
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedImage && !selectMode && (
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

export default ClientAlbumView;
