export interface CalculatorResponse {
    equal: CalculatorComponentValue;
    floor: CalculatorComponentValue;
    ceil: CalculatorComponentValue;
}
export interface CalculatorComponentValue {
    value: number;
    cards: number[];
}