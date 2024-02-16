import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Event extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  eventID?: string;

  @property({
    type: 'string',
    required: true,
  })
  eventName: string;

  @property({
    type: 'string',
    required: true,
  })
  eventStartTime: string;

  @property({
    type: 'string',
    required: true,
  })
  eventEndTime: string;

  @property({
    type: 'string',
    required: true,
  })
  eventDate: string;

  @property({
    type: 'string',
    required: true,
  })
  eventDepartment: string;

  @property({
    type: 'string',
    required: true,
  })
  eventLocation: string;

  @property({
    type: 'string',
    required: true,
  })
  eventDressCode: string;

  @property({
    type: 'number',
    required: true,
  })
  eventUshers: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  availableMembers?: string[];

  @property({
    type: 'number',
  })
  eventUsherAttendance?: number;

  @property({
    type: 'string',
    required: true,
  })
  eventTeamLead: string;

  @property({
    type: 'object',
    required: true,
  })
  attendance: {[memberId: string]: boolean};

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Event>) {
    super(data);
  }
}

export interface EventRelations {
  // describe navigational properties here
}

export type EventWithRelations = Event & EventRelations;
