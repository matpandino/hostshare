export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  amenities: string[];
  rating: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  categories: string[];
  image: string;
}
