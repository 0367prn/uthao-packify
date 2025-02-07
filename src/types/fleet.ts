export interface Vehicle {
  type: string;
  capacity: string;
  features: string[];
  specifications: {
    length: string;
    width: string;
    height: string;
    maxLoad: string;
  };
  pricing: {
    baseRate: string;
    perKm: string;
  };
  availability: string;
  serviceAreas: string[];
  rating: number;
  reviews: number;
  image: string;
}