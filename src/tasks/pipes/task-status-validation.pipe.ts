import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  private _isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }

  transform(value: any) {
    value = value.toUpperCase();

    if (!this._isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is invalid status`);
    }

    return value;
  }
}