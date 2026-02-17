import React from 'react';
import type { TLineChartDataProp } from './types';
import type { YRangeProp } from './types';
export declare const LineChartContext: any;
type LineChartProviderProps = {
    children: React.ReactNode;
    data: TLineChartDataProp;
    yRange?: YRangeProp;
    onCurrentIndexChange?: (x: number) => void;
    xLength?: number;
    xDomain?: [number, number];
};
export declare function LineChartProvider({ children, data, yRange, onCurrentIndexChange, xLength, xDomain, }: LineChartProviderProps): any;
export declare namespace LineChartProvider {
    var displayName: string;
}
export {};
//# sourceMappingURL=Context.d.ts.map