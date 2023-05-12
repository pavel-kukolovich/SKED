import { DayNight } from './DayNight';
import { addLessonSlot } from './addLessonSlot';
import { createLessonSlot } from './createLessonSlot';
import { deleteAllLessonSlots } from './deleteAllLessonSlots';
import { deleteLessonSlot } from './deleteLessonSlot';
import { editLessonSlot } from './editLessonSlot';
import { recreateDaysUls } from './recreateDaysUls';
import './style.scss';

const html = document.getElementById('html') as HTMLElement;
const lastHtmlClass = DayNight();

recreateDaysUls();


// saveWeekDay();

setInterval(() => {
    const mondayList = JSON.parse(localStorage.getItem('monday-list')!);
    const tuesdayList = JSON.parse(localStorage.getItem('tuesday-list')!);
    const wednesdayList = JSON.parse(localStorage.getItem('wednesday-list')!);
    const thursdayList = JSON.parse(localStorage.getItem('thursday-list')!);
    const fridayList = JSON.parse(localStorage.getItem('friday-list')!);
    const saturdayList = JSON.parse(localStorage.getItem('saturday-list')!);
    const sundayList = JSON.parse(localStorage.getItem('sunday-list')!);
}, 3000000)



addLessonSlot();
setInterval(deleteLessonSlot, 300);
createLessonSlot();
setInterval(editLessonSlot, 300);
deleteAllLessonSlots();
