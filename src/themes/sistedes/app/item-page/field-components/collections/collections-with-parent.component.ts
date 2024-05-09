import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import {map, scan, startWith, switchMap, tap, withLatestFrom} from 'rxjs/operators';
import { CollectionDataService } from 'src/app/core/data/collection-data.service';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';

import { Collection } from 'src/app/core/shared/collection.model';
import { hasValue } from 'src/app/shared/empty.util';
import {
  getAllCompletedRemoteData,
  getAllSucceededRemoteDataPayload,
  getFirstSucceededRemoteDataPayload,
  getPaginatedListPayload,
} from 'src/app/core/shared/operators';
import { FindListOptions } from 'src/app/core/data/find-list-options.model';
import { DSONameService } from 'src/app/core/breadcrumbs/dso-name.service';
import { followLink } from 'src/app/shared/utils/follow-link-config.model';
import { CollectionsComponent } from 'src/app/item-page/field-components/collections/collections.component';
import { MetadataFieldWrapperComponent } from 'src/app/shared/metadata-field-wrapper/metadata-field-wrapper.component';
import { TranslateModule } from '@ngx-translate/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * This component renders the parent collections section of the item
 * inside a 'ds-metadata-field-wrapper' component showing the parent Community.
 */

@Component({
  selector: 'ds-item-page-collections-with-parent',
  templateUrl: './collections-with-parent.component.html',
  imports: [
    MetadataFieldWrapperComponent,
    TranslateModule,
    NgForOf,
    AsyncPipe,
    RouterLink,
    NgIf,
  ],
  standalone: true,
})
export class CollectionsWithParentComponent extends CollectionsComponent implements OnInit {

  constructor(
    private collectionDataService: CollectionDataService,
    public dsoNameService: DSONameService,
    protected cdr: ChangeDetectorRef,
  ) {
    super(collectionDataService, dsoNameService, cdr);
  }

  ngOnInit(): void {
    const owningCollection$: Observable<Collection> = this.collectionDataService.findByHref(this.item._links.owningCollection.href, true, true, followLink('parentCommunity')).pipe(
      getFirstSucceededRemoteDataPayload(),
      startWith(null as Collection),
    );

    const mappedCollections$: Observable<Collection[]> = this.loadMore$.pipe(
      // update isLoading$
      tap(() => this.isLoading$.next(true)),

      // request next batch of mapped collections
      withLatestFrom(this.lastPage$),
      switchMap(([_, lastPage]: [void, number]) => {
        return this.collectionDataService.findListByHref(this.item._links.mappedCollections.href, Object.assign(new FindListOptions(), {
          elementsPerPage: this.pageSize,
          currentPage: lastPage + 1,
        }), true, true, followLink('parentCommunity'));
      }),

      getAllCompletedRemoteData<PaginatedList<Collection>>(),

      // update isLoading$
      tap(() => this.isLoading$.next(false)),

      getAllSucceededRemoteDataPayload(),

      // update hasMore$
      tap((response: PaginatedList<Collection>) => this.hasMore$.next(response.currentPage < response.totalPages)),

      // update lastPage$
      tap((response: PaginatedList<Collection>) => this.lastPage$.next(response.currentPage)),

      getPaginatedListPayload<Collection>(),

      // add current batch to list of collections
      scan((prev: Collection[], current: Collection[]) => [...prev, ...current], []),

      startWith([]),
    ) as Observable<Collection[]>;

    this.collections$ = combineLatest([owningCollection$, mappedCollections$]).pipe(
      map(([owningCollection, mappedCollections]: [Collection, Collection[]]) => {
        return [owningCollection, ...mappedCollections].filter(collection => hasValue(collection));
      }),
    );
    this.cdr.detectChanges();
  }
}
