import { Allow, Entity, Fields, IdEntity } from 'remult';

@Entity('another-entity', {
  allowApiCrud: true,
  allowApiInsert: false,
})
export class AnotherEntity extends IdEntity {
  @Fields.string()
  city = '';
}
