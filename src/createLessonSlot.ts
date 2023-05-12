import { autoWeekDaySave } from "./autoWeekDaySave";
import { formDataCollector } from "./formDataCollector";
import { lessonSlotAssembling } from "./lessonSlotAssembling";
import { listSorter } from "./listSorter";

export function createLessonSlot() {
    const createLessonSlotButtons = document.querySelectorAll('button.create-lesson-slot')

    for (let button of createLessonSlotButtons) {
        button.addEventListener('click', (event) => {
            const targetBlock = event.target as Element;

            const thatBlockList = targetBlock.closest('ul')!;
            const createLessonSlotBlock = thatBlockList.querySelector("div.lesson-slot-creator") as HTMLDivElement;

            const creatingFormData = formDataCollector(targetBlock);

            lessonSlotAssembling(createLessonSlotBlock, creatingFormData);

            listSorter(thatBlockList, createLessonSlotBlock);
            createLessonSlotBlock.classList.add('displayNone');

            autoWeekDaySave(createLessonSlotBlock);
        });
    }
}