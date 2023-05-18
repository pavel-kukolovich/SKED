export function addLessonSlot () {
    const addLessonSlotButtonsBlocks = document.querySelectorAll("button.addLessonSlot");
    for (let item of addLessonSlotButtonsBlocks) {
        item.addEventListener("click", () => {
            const closestDayBlock = item.parentElement?.parentElement?.parentElement!;

            const lessonSlotCreator = closestDayBlock.querySelector("div.lesson-slot-creator")!;
            lessonSlotCreator.classList.remove("displayNone")
        })
    }
}