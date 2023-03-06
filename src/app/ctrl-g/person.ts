import { Entity, Field, Fields, IdEntity } from 'remult';
import { Gender } from './gender';

@Entity('people', { allowApiCrud: true })
export class Person extends IdEntity {
  @Fields.string()
  name = '';
  @Field(() => Gender)
  gender: Gender = Gender.male;
}
