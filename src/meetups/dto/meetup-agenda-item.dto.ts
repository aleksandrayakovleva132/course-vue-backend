import { ApiProperty } from '@nestjs/swagger';
import { AgendaItemEntity } from '../entities/agenda-item.entity';
import { agendaItemsTypes, AgendaItemsTypes } from '../agenda-item-types';

export class MeetupAgendaItemDto {
  readonly id: number;
  readonly startsAt: string;
  readonly endsAt: string;
  @ApiProperty({
    enum: agendaItemsTypes,
  })
  readonly type: AgendaItemsTypes;
  readonly title?: string;
  readonly description?: string;
  readonly speaker?: string;
  @ApiProperty({
    enum: ['RU', 'EN'],
  })
  readonly language?: string;

  constructor(item: AgendaItemEntity) {
    this.id = item.id;
    this.startsAt = item.startsAt;
    this.endsAt = item.endsAt;
    this.type = item.type;
    this.title = item.title;
    this.description = item.description;
    this.speaker = item.speaker;
    this.language = item.language;
  }
}
