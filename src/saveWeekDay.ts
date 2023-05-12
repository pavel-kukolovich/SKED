export function saveWeekDay (closestWeekDay: HTMLDivElement) {
    // const saveWeekDayButtons = document.querySelectorAll("button.save-lesson-slots");

    // for (let button of saveWeekDayButtons) {
        // button.addEventListener("click", (event) => {
            // const targetBlock = event.target as Element;

            // const closestWeekDay = targetBlock.closest("div.week-day")!;
            const closestWeekDayId = closestWeekDay.id;
            const ulThatDay = closestWeekDay.querySelector("ul")!;

            const ulToJSON = JSON.stringify(ulThatDay.innerHTML);

            localStorage.setItem(`${closestWeekDayId}-list`, ulToJSON);
        // })
    // }

    
}