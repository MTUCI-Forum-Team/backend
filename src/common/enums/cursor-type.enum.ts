import { QueryCursorEnum } from './query-cursor.enum';

export enum CursorTypeEnum {
  DATE = 'DATE',
  STRING = 'STRING',
  NUMBER = 'NUMBER'
}

export const getCursorType = (cursor: QueryCursorEnum): CursorTypeEnum =>
  cursor === QueryCursorEnum.DATE
    ? CursorTypeEnum.NUMBER
    : CursorTypeEnum.STRING;
