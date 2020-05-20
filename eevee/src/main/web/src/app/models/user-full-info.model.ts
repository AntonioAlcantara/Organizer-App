import { FlatModel } from './flat.model';

export class UserFullInfoModel {
  // NotNull
  id: number;
  // NotEmpty
  name: string;
  // NotEmpty
  surname: string;
  // NotEmpty
  nickname: string;
  city: string;
  // NotEmpty
  email: string;
  // NotEmpty
  roles: string[];
  flats: FlatModel[];
}
