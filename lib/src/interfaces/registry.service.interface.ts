import { InjectionToken } from "@angular/core";

import { Mfe } from "../models/mfe";

export interface IRegistryService {
   /**
    * Initializes the registry by loading micro-frontend metadata.
    */
   hydrate(): Promise<void>;

   /**
    * Finds micro-frontend metadata based on the provided query.
    * @param query micro-frontend metadata to filter the search results.
    */
   find(query: Partial<Mfe>): Mfe[];
}

export const MFE_REGISTRY_SERVICE_TOKEN = new InjectionToken<IRegistryService>('MfeRegistryServiceToken');
