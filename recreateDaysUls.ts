export function recreateDaysUls () {
    const weekDays = document.querySelectorAll('div.week-day');
    

    for (let day of weekDays) {
        let dayId = day.id;
        let storageUl = JSON.parse(localStorage.getItem(`${dayId}-list`)!);
        
        if(storageUl) {
            const thatDayUl = day.querySelector('ul.lessons')!;

            // const storageUlElement = new DOMParser().parseFromString(storageUl, 'text/xml')

            thatDayUl.querySelector('div')?.remove()

            thatDayUl.innerHTML = `${storageUl}`;
        }
    }
}