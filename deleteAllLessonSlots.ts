import { autoWeekDaySave } from "./autoWeekDaySave";

export function deleteAllLessonSlots () {
    const deleteAllLessonSlotsButtons = document.querySelectorAll("button.deleteAllSlots")

    for (let button of deleteAllLessonSlotsButtons) {
        button.addEventListener("click", (event) => {
            const targetedButton = event.target as Element;

            const closestWeekDay = targetedButton.closest("div.week-day") as HTMLDivElement;

            const thatDayList = closestWeekDay?.querySelector("ul");

            const thatDayListItems = thatDayList?.querySelectorAll("li")!;

            for (let li of thatDayListItems) {
                li.remove();
            }

            autoWeekDaySave(closestWeekDay);
        })
    }
}