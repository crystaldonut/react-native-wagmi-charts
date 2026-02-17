import type { ReactNode } from 'react';
import type { TLineChartData, TLineChartDataProp } from './types';
export declare const DefaultLineChartId = "__LineChartData";
export type LineChartDataContext = {
    [key: string]: TLineChartData;
};
export type LineChartDataProviderProps = {
    children: ReactNode;
    data: TLineChartDataProp;
};
export declare function LineChartDataProvider({ children, data, }: LineChartDataProviderProps): any;
export declare function LineChartIdProvider({ id, children, }: {
    id?: string;
    children: ReactNode;
}): any;
export declare const useLineChartId: () => any;
export declare function useLineChartData({ id }: {
    id?: string;
}): any;
//# sourceMappingURL=Data.d.ts.map