export class CreateEventModel {
    // NotEmpty
    title: string;
    description: string;
    amount: number;
    startDate: Date;
    endDate: Date;
    // NotEmpty
    eventType: string;
    // NotEmpty
    roomIds: number[];
    // NotEmpty
    userIds: number[];
    // NotNull
    flatId: number;
}
