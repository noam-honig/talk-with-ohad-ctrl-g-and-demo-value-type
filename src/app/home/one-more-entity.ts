import { Entity, Fields, IdEntity } from 'remult';

@Entity('oneMoreEntity', {
  allowApiCrud: true,
})
export class OneMoreEntity extends IdEntity {
  @Fields.string()
  name = '';
  @Fields.string()
  title = '';
}
