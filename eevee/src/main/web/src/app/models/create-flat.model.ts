export class CreateFlatModel {
  // NotEmpty @Size(min = 1, max = 25)
  name: string;
  // NotEmpty @Size(min = 1, max = 50)
  address: string;
  // NotEmpty
  userIds: number[];
}
