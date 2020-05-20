import { UserLowInfoModel } from './user-low-info.model';

export class FlatModel {
  // NotNull
  id: number;
  // NotEmpty
  name: string;
  // NotEmpty
  address: string;
  // NotEmpty
  users: UserLowInfoModel[];
}
