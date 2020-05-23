import { UserLowInfoModel } from './user-low-info.model';

export class FlatModel {
  /**
   * Not null
   */
  id: number;
  /**
   * NotEmpty
   */
  name: string;
  address: string;
  users: UserLowInfoModel[];

}
