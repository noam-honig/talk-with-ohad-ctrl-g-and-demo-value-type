import { ValueListFieldType } from 'remult';

@ValueListFieldType()
export class Gender {
  static male = new Gender('זכר');
  static female = new Gender('נקבה');
  constructor(public caption: string) {}
}
