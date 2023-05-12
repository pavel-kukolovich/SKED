import { autoWeekDaySave } from "./autoWeekDaySave";

export function deleteLessonSlot () {
    const deleteLessonSlotButtons = document.querySelectorAll("button.deleteLessonSlot");

    for (let button of deleteLessonSlotButtons) {
        button.addEventListener("click", (event) => {
            const targetBlock = event.target as Element;
            const lessonSlot = targetBlock.closest("li.lessonSlot") as HTMLLIElement

            const closestWeekDay = targetBlock.closest('div.week-day') as HTMLDivElement;

            targetBlock.closest("li.lessonSlot")?.remove();

            

            autoWeekDaySave(closestWeekDay);
        })
    }
}