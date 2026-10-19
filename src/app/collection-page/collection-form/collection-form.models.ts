import {
  DynamicCheckboxModelConfig,
  DynamicFormControlModel,
  DynamicInputModel,
  DynamicSelectModelConfig,
  DynamicTextAreaModel,
} from '@ng-dynamic-forms/core';
import { DynamicDsDatePickerModel } from 'src/app/shared/form/builder/ds-dynamic-form-ui/models/date-picker/date-picker.model';

import { environment } from '../../../environments/environment';

export const collectionFormEntityTypeSelectionConfig: DynamicSelectModelConfig<string> = {
  id: 'entityType',
  name: 'dspace.entity.type',
  disabled: false,
  errorMessages: {
    required: 'collection.form.errors.entityType.required',
  },
};

export const collectionFormSubmissionDefinitionSelectionConfig: DynamicSelectModelConfig<string> = {
  id: 'submissionDefinition',
  name: 'dspace.submission.definition',
  disabled: false,
  errorMessages: {
    required: 'collection.form.errors.submissionDefinition.required',
  },
};


export const collectionFormSharedWorkspaceCheckboxConfig: DynamicCheckboxModelConfig = {
  id: 'sharedWorkspace',
  name: 'dspace.workspace.shared',
  disabled: false,
};

/**
 * The dynamic form fields used for creating/editing a collection
 * @type {(DynamicInputModel | DynamicTextAreaModel)[]}
 */
export const collectionFormModels: DynamicFormControlModel[] = [
  new DynamicInputModel({
    id: 'title',
    name: 'dc.title',
    required: true,
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'Please enter a name for this title',
    },
  }),
  // BEGIN: Sistedes
  new DynamicInputModel({
    id: 'sistedesid',
    name: 'dc.identifier.sistedes',
    required: true,
    validators: {
      required: null,
    },
    errorMessages: {
      required: 'Please enter a Sistedes identifier for this collection',
    },
  }),
  new DynamicDsDatePickerModel({
    id: 'date-issued',
    name: 'dc.date.issued',
    required: true,
    repeatable: true,
    errorMessages: {
      required: 'Please enter a creation date for this collection',
    },
  }),
  // END: Sistedes
  new DynamicTextAreaModel({
    id: 'description',
    name: 'dc.description',
    spellCheck: environment.form.spellCheck,
  }),
  new DynamicTextAreaModel({
    id: 'abstract',
    name: 'dc.description.abstract',
    spellCheck: environment.form.spellCheck,
  }),
  new DynamicTextAreaModel({
    id: 'rights',
    name: 'dc.rights',
    spellCheck: environment.form.spellCheck,
  }),
  new DynamicTextAreaModel({
    id: 'tableofcontents',
    name: 'dc.description.tableofcontents',
    spellCheck: environment.form.spellCheck,
  }),
  new DynamicTextAreaModel({
    id: 'license',
    name: 'dc.rights.license',
    spellCheck: environment.form.spellCheck,
  }),
];
