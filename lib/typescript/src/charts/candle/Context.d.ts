import React from 'react';
import type { TData, TDomain } from './types';
export declare const CandlestickChartContext: any;
type CandlestickChartProviderProps = {
    children: React.ReactNode;
    data: TData;
    valueRangeY?: TDomain;
    onCurrentIndexChange?: (x: number) => void;
};
export declare function CandlestickChartProvider({ children, data, valueRangeY, onCurrentIndexChange, }: CandlestickChartProviderProps): any;
export declare namespace CandlestickChartProvider {
    var displayName: string;
}
export {};
//# sourceMappingURL=Context.d.ts.map