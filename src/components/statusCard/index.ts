import { DayShift } from './DayShift';
import { NightShift } from './NightShift';
import { StatusCard } from './StatusCard';

export default Object.assign(StatusCard, {
    DayShift: DayShift,
    NightShift: NightShift,
});
