export interface IEvent {
   description: string;
   startedAt: Date;
   finishedAt: Date;
   completed: boolean;
   id: number;
}

export interface IFilterEvents {
   date?: Date | null;
}
