import { Image } from '@/lib/mockData';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from './ui/button';

interface ImageLightboxProps {
  image: Image;
  images: Image[];
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const ImageLightbox = ({ image, images, onClose, onNext, onPrevious }: ImageLightboxProps) => {
  const currentIndex = images.findIndex((img) => img.id === image.id);
  const hasNext = currentIndex < images.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleDownload = () => {
    // Mock download functionality
    window.open(image.url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 hover:bg-accent rounded-lg transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="absolute top-4 left-4 z-10 text-sm text-muted-foreground">
        {currentIndex + 1} / {images.length}
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <Button variant="secondary" size="sm" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      {hasPrevious && (
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-accent rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 hover:bg-accent rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
        <img
          src={image.url}
          alt={image.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};
