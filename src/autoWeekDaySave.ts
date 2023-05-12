import { saveWeekDay } from "./saveWeekDay";

export function autoWeekDaySave (block: HTMLElement) {
    

    if (block !== block.closest('div.week-day')) {
        const weekDay = block.closest('div.week-day') as HTMLDivElement;
        saveWeekDay(weekDay)
        const saveButton = weekDay?.querySelector('button.save-lesson-slots') as HTMLButtonElement;
        saveButton.click();
    } else {
        saveWeekDay(block as HTMLDivElement);
        const saveButton = block?.querySelector('button.save-lesson-slots') as HTMLButtonElement;
        saveButton.click();
    }
}