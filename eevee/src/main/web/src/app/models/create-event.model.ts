export class CreateEventModel {
    // NotEmpty
    title: string;
    description: string;
    amount: number;
    startDate: string;
    endDate: string;
    // NotEmpty
    eventType: string;
    // NotEmpty
    roomIds: number[];
    // NotEmpty
    userIds: number[];
    // NotNull
    flatId: number;
}
