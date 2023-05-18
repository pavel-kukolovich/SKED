export function listSorter (list: HTMLUListElement, createLessonSlotBlock: HTMLDivElement) {
    const listItems = list.querySelectorAll('li');

    const sorted = [...listItems].sort(function (firtsLi: Element, secondLi: Element): number {
        const firtsLiNumHours = Number(firtsLi.getAttribute('startTimeHours')) * 3600;
        const firtsLiNumMinutes = Number(firtsLi.getAttribute('startTimeMinutes')) * 60;
        const secondLiNumHours = Number(secondLi.getAttribute('startTimeHours')) * 3600;
        const secondLiNumMinutes = Number(secondLi.getAttribute('startTimeMinutes')) * 60;
        const firtsLiNum = firtsLiNumHours + firtsLiNumMinutes;
        const secondLiNum = secondLiNumHours + secondLiNumMinutes;
        
        return firtsLiNum - secondLiNum;
    });

    console.log(sorted)

    for (let li of listItems) {
        li.remove();
    }

    for (let li of sorted) {
        createLessonSlotBlock.before(li);
    }

    
}