import { Embeddable, Property } from '@mikro-orm/core';

import dayjs from 'dayjs';

import { ICredentials } from '../interfaces/credentials.interface';
import { IsNumber } from 'class-validator';

@Embeddable()
export class CredentialsEmbeddable implements ICredentials {
  @Property({ default: 0 })
  public version = 0;

  @Property({ default: '' })
  public lastPassword = '';

  @Property({ default: dayjs().unix() })
  public passwordUpdatedAt: number = dayjs().unix();

  @Property({ default: dayjs().unix() })
  public updatedAt: number = dayjs().unix();

  @Property({ columnType: 'int', default: 0 })
  @IsNumber()
  public pictureVersion: number = 0;

  public updatePassword(password: string): void {
    this.version++;
    this.lastPassword = password;
    this.passwordUpdatedAt = dayjs().unix();
    this.updatedAt = dayjs().unix();
  }

  public updateVersion(): void {
    this.version++;
    this.updatedAt = dayjs().unix();
  }
}
