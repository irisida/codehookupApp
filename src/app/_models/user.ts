import { Photo } from './photo';

export interface User {
  id: number;
  userame: String;
  knownAs: String;
  age: number;
  gender: String;
  created: Date;
  lastActive: Date;
  photoUrl: String;
  city: String;
  country: String;
  bio?: String;
  introduction?: String;
  lookingFor?: String;
  photos: Photo[];
}
