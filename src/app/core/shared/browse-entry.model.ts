import { autoserialize, autoserializeAs, deserialize } from 'cerialize';
import { ListableObject } from '../../shared/object-collection/shared/listable-object.model';
import { resourceType } from '../cache/builders/build-decorators';
import { TypedObject } from '../cache/object-cache.reducer';
import { excludeFromEquals } from '../utilities/equals.decorators';
import { BROWSE_ENTRY } from './browse-entry.resource-type';
import { GenericConstructor } from './generic-constructor';
import { HALLink } from './hal-link.model';
import { ResourceType } from './resource-type';

/**
 * Class object representing a browse entry
 * This class is not normalized because browse entries do not have self links
 */
@resourceType(BrowseEntry.type)
export class BrowseEntry extends ListableObject implements TypedObject {
  static type = BROWSE_ENTRY;

  /**
   * The object type
   */
  @excludeFromEquals
  @autoserialize
  type: ResourceType;

  /**
   * The authority string of this browse entry
   */
  @autoserialize
  authority: string;

  /**
   * The value of this browse entry
   */
  @autoserialize
  value: string;

  /**
   * The language of the value of this browse entry
   */
  @autoserializeAs('valueLang')
  language: string;

  /**
   * The count of this browse entry
   */
  @excludeFromEquals
  @autoserialize
  count: number;

  @deserialize
  _links: {
    self: HALLink;
    entries: HALLink;
  };

  /**
   * Method that returns as which type of object this object should be rendered
   */
  getRenderTypes(): Array<string | GenericConstructor<ListableObject>> {
    return [this.constructor as GenericConstructor<ListableObject>];
  }
}
