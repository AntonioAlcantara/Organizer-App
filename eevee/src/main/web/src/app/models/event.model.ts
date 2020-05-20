import { UserLowInfoModel } from './user-low-info.model';
import { RoomModel } from './room.model';

export class EventModel {
  // NotNull
  id: number;
  // NotEmpty
  title: string;
  description: string;
  amount: number;
  startDate: Date;
  endDate: Date;
  // NotEmpty
  eventType: string;
  // NotEmpty
  rooms: RoomModel[];
  // NotEmpty
  creator: string;
  // NotEmpty
  users: UserLowInfoModel[];

}
