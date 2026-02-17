import { LineProps } from 'react-native-svg';
export type CandlestickChartLineProps = Omit<LineProps, 'x' | 'y'> & {
    color?: string;
    x: number;
    y: number;
};
export declare const CandlestickChartLine: ({ color, x, y, ...props }: CandlestickChartLineProps) => any;
//# sourceMappingURL=Line.d.ts.map