import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerHelpers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Helpers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly birth?: string | null;
  readonly nationality?: string | null;
  readonly maritalStatus?: string | null;
  readonly Religion?: string | null;
  readonly salary?: string | null;
  readonly languages?: string | null;
  readonly experienceYears?: string | null;
  readonly experienceKids?: string | null;
  readonly jobType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHelpers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Helpers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly birth?: string | null;
  readonly nationality?: string | null;
  readonly maritalStatus?: string | null;
  readonly Religion?: string | null;
  readonly salary?: string | null;
  readonly languages?: string | null;
  readonly experienceYears?: string | null;
  readonly experienceKids?: string | null;
  readonly jobType?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Helpers = LazyLoading extends LazyLoadingDisabled ? EagerHelpers : LazyHelpers

export declare const Helpers: (new (init: ModelInit<Helpers>) => Helpers) & {
  copyOf(source: Helpers, mutator: (draft: MutableModel<Helpers>) => MutableModel<Helpers> | void): Helpers;
}