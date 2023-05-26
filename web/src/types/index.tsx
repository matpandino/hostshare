export interface Category {
  id: string;
  type: string;
  title: string;
}

type Image = {
  url: string;
  width: number;
  height: number;
  mimeType: string;
  orientation: string;
  aspectRatio: number;
  type: string;
};

type Detail = {
  type: string;
  value: number;
};

type Host = {
  name: string;
  avatar: Image;
  isSuperhost: boolean;
};

type Amenity = {
  group: string;
  available: boolean;
  title: string;
  type: string;
};

type Location = {
  lat: number;
  long: number;
  address: string;
  city: string;
  country: {
    code: string;
    title: string;
  };
  zip: string;
};

type Ratings = {
  accuracy: number;
  checkin: number;
  cleanliness: number;
  communication: number;
  location: number;
  value: number;
  guestSatisfactionOverall: number;
};

type Currency = {
  code: string;
  symbol: string;
  name: string;
};

type SleepingArrangement = {
  title: string;
  subTitle: string;
  icons: string[];
};

export interface Listing {
  ref: string;
  category?: string;
  info: {
    type: string;
    images: {
      type: string;
      data: Image[];
      count: number;
    };
    details: {
      type: string;
      data: Detail[];
      count: number;
    };
    description: string;
    mainImage: Image;
    maxGuestCapacity: number;
    host: Host;
    amenities: {
      type: string;
      data: Amenity[];
      count: number;
    };
    title: string;
    id: string;
    location: Location;
    ratings: Ratings;
    visibleReviewCount: number;
    available: boolean;
    price: number;
    currency: Currency;
    sleepingArrangements: {
      type: string;
      data: SleepingArrangement[]; // Update this type to match the actual structure if available
      count: number;
    };
  };
}
