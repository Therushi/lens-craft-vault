// Mock data for the photography platform prototype

export interface Image {
  id: string;
  url: string;
  thumbnail: string;
  title: string;
  albumId: string;
  uploadedAt: string;
}

export interface Album {
  id: string;
  title: string;
  date: string;
  coverImage: string;
  imageCount: number;
  tags: string[];
  visibility: 'public' | 'private';
}

export interface Photographer {
  id: string;
  name: string;
  email: string;
}

export const mockPhotographer: Photographer = {
  id: 'photo-1',
  name: 'Alex Chen',
  email: 'alex@example.com',
};

export const mockAlbums: Album[] = [
  {
    id: 'album-1',
    title: 'Sarah & Michael Wedding',
    date: '2024-03-15',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552',
    imageCount: 247,
    tags: ['wedding', 'outdoor', 'spring'],
    visibility: 'private',
  },
  {
    id: 'album-2',
    title: 'Corporate Event - Tech Summit 2024',
    date: '2024-02-28',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    imageCount: 156,
    tags: ['corporate', 'event', 'conference'],
    visibility: 'private',
  },
  {
    id: 'album-3',
    title: 'Emma Senior Portraits',
    date: '2024-02-10',
    coverImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
    imageCount: 89,
    tags: ['portrait', 'senior', 'studio'],
    visibility: 'private',
  },
  {
    id: 'album-4',
    title: 'Mountain Landscapes Collection',
    date: '2024-01-20',
    coverImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    imageCount: 134,
    tags: ['landscape', 'nature', 'mountains'],
    visibility: 'public',
  },
];

export const mockImages: Record<string, Image[]> = {
  'album-1': [
    {
      id: 'img-1-1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
      title: 'Ceremony',
      albumId: 'album-1',
      uploadedAt: '2024-03-15T14:30:00Z',
    },
    {
      id: 'img-1-2',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866',
      thumbnail: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400',
      title: 'First Dance',
      albumId: 'album-1',
      uploadedAt: '2024-03-15T19:45:00Z',
    },
    {
      id: 'img-1-3',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
      thumbnail: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400',
      title: 'Reception Details',
      albumId: 'album-1',
      uploadedAt: '2024-03-15T18:15:00Z',
    },
    {
      id: 'img-1-4',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
      title: 'Bridal Portrait',
      albumId: 'album-1',
      uploadedAt: '2024-03-15T13:00:00Z',
    },
    {
      id: 'img-1-5',
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
      thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400',
      title: 'Wedding Rings',
      albumId: 'album-1',
      uploadedAt: '2024-03-15T12:30:00Z',
    },
    {
      id: 'img-1-6',
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
      thumbnail: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400',
      title: 'Couple Portrait',
      albumId: 'album-1',
      uploadedAt: '2024-03-15T16:20:00Z',
    },
  ],
  'album-2': [
    {
      id: 'img-2-1',
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
      thumbnail: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
      title: 'Keynote Speaker',
      albumId: 'album-2',
      uploadedAt: '2024-02-28T10:00:00Z',
    },
    {
      id: 'img-2-2',
      url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678',
      thumbnail: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400',
      title: 'Panel Discussion',
      albumId: 'album-2',
      uploadedAt: '2024-02-28T14:30:00Z',
    },
    {
      id: 'img-2-3',
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2',
      thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400',
      title: 'Networking Session',
      albumId: 'album-2',
      uploadedAt: '2024-02-28T16:00:00Z',
    },
  ],
};
