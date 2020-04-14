import { MeetupEntity } from '../entities/meetup.entity';

export class MeetupDto {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly cover?: string;
  readonly date: number | string;
  readonly organizer: number | string;
  readonly place: string;
  readonly organizing?: boolean;
  readonly attending?: boolean;

  constructor(meetup: MeetupEntity) {
    this.id = meetup.id;
    this.title = meetup.title;
    this.description = meetup.description;
    this.cover = meetup.cover;
    this.date = meetup.date.getTime();
    this.organizer = meetup.organizer.fullname;
    this.place = meetup.place;
    this.organizing = meetup.organizing;
    this.attending = meetup.attending;
  }
}
