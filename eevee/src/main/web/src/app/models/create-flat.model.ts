export class CreateFlatModel {
  // NotEmpty @Size(min = 1, max = 25)
  name: string;
  // NotEmpty @Size(min = 1, max = 50)
  address: string;
  /**
   * NotEmpty
   * Array with creator Id from localstorage (json) and rest of the user's Ids we'll add later.
   */
  userIds: string[];
  constructor() {
    this.name = '';
    this.address = '';
    this.userIds = [];

  }
}
