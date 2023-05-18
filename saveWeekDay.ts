export function saveWeekDay (closestWeekDay: HTMLDivElement) {
            const closestWeekDayId = closestWeekDay.id;
            const ulThatDay = closestWeekDay.querySelector("ul")!;

            const ulToJSON = JSON.stringify(ulThatDay.innerHTML);

            localStorage.setItem(`${closestWeekDayId}-list`, ulToJSON);
}