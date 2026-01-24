export interface PhobosConfig {
    name: string;
    path: string;
    roles: string[];
    tabs: PhobosTabConfig[];
}

export interface PhobosTabConfig {
    tabName: string;
    tabPath: string;
}