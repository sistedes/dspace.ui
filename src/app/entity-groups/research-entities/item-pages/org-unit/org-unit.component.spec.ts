import { buildPaginatedList } from '../../../../core/data/paginated-list.model';
import { Item } from '../../../../core/shared/item.model';
import { PageInfo } from '../../../../core/shared/page-info.model';
import {
  createRelationshipsObservable,
  getItemPageFieldsTest,
} from '../../../../item-page/simple/item-types/shared/item.component.spec';
import { createSuccessfulRemoteDataObject$ } from '../../../../shared/remote-data.utils';
import { OrgUnitComponent } from './org-unit.component';

const mockItem: Item = Object.assign(new Item(), {
  bundles: createSuccessfulRemoteDataObject$(buildPaginatedList(new PageInfo(), [])),
  metadata: {
    'organization.foundingDate': [
      {
        language: 'en_US',
        value: '2018',
      },
    ],
    'organization.address.addressLocality': [
      {
        language: 'en_US',
        value: 'New York',
      },
    ],
    'organization.address.addressCountry': [
      {
        language: 'en_US',
        value: 'USA',
      },
    ],
    'dc.identifier': [
      {
        language: 'en_US',
        value: '1',
      },
    ],
    'dc.description': [
      {
        language: 'en_US',
        value: 'desc',
      },
    ],
  },
  relationships: createRelationshipsObservable(),
});

describe('OrgUnitComponent', getItemPageFieldsTest(mockItem, OrgUnitComponent));
