export interface Mfe {
   name: string;
   apiUrl: URL;
   baseUrl: URL;
   features: {
    [featureName in MfeFeatures]: boolean;
   }
}

export type MfeFeatures = "auth";