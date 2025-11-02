import { Image } from '@/lib/mockData';

interface ImageGridProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
      {images.map((image) => (
        <button
          key={image.id}
          onClick={() => onImageClick(image)}
          className="aspect-square overflow-hidden bg-muted hover:opacity-90 transition-opacity"
        >
          <img
            src={image.thumbnail}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
};
