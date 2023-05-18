import { autoWeekDaySave } from "./autoWeekDaySave";
import { editFormDataCollector } from "./editFormDataCollector";
import { listSorter } from "./listSorter";

export function saveEdits(closestWeekDay: HTMLDivElement, closestUl: HTMLUListElement, button: HTMLButtonElement) {
    // const saveEditsButtons = document.querySelectorAll('button.save-lesson-slot');

    // if (saveEditsButtons) {
    // for (let button of saveEditsButtons) {
    button.addEventListener('click', (event) => {
        const target = event.target as Element;
        const createLessonSlotBlock = closestWeekDay.querySelector('div.lesson-slot-creator') as HTMLDivElement;

        const thatLessonSlot = target.closest('li.lessonSlot')!;
        const editFormData = JSON.parse(editFormDataCollector(target))


        const liInnerElements = {
            lessonTime: thatLessonSlot?.querySelector('div.lesson-time')!,
            lessonStartTime: thatLessonSlot?.querySelector('div.lesson-time')?.innerHTML.split(' - ').shift(),
            lessonEndTime: thatLessonSlot?.querySelector('div.lesson-time')?.innerHTML.split(' - ').pop(),
            lessonName: thatLessonSlot?.querySelector('h3')!,
            teacherName: thatLessonSlot?.querySelector('div.teacher-name > span')!,
            notes: thatLessonSlot?.querySelector('div.notes > p')!,
        }

        if (editFormData.startTime) {
            thatLessonSlot.setAttribute("startTimeHours", editFormData.startTimeHours);
            thatLessonSlot.setAttribute("startTimeMinutes", editFormData.startTimeMinutes);
        }

        if (editFormData.startTime && editFormData.endTime) {
            liInnerElements.lessonTime.innerHTML = '';
            liInnerElements.lessonTime.innerHTML = editFormData.startTime + ' - ' + editFormData.endTime;
        }

        if (editFormData.startTime && !editFormData.endTime) {
            const currentContent = liInnerElements.lessonTime.innerHTML = ` - ${liInnerElements.lessonEndTime}`;
            liInnerElements.lessonTime.innerHTML = editFormData.startTime + currentContent;
        }

        if (!editFormData.startTime && editFormData.endTime) {
            const currentConetent = liInnerElements.lessonTime.innerHTML = `${liInnerElements.lessonStartTime} - `;
            liInnerElements.lessonTime.innerHTML = currentConetent + editFormData.endTime;
        }

        if (editFormData.lessonNameEditWindow) {
            liInnerElements.lessonName.innerHTML = '';
            liInnerElements.lessonName.innerHTML = editFormData.lessonNameEditWindow;
        }

        if (editFormData.teacherNameEditWindow) {
            liInnerElements.teacherName.innerHTML = '';
            liInnerElements.teacherName.innerHTML = editFormData.teacherNameEditWindow;
        }

        if (editFormData.notesEditWindow) {
            liInnerElements.notes.innerHTML = '';
            liInnerElements.notes.innerHTML = editFormData.notesEditWindow;
        }

        thatLessonSlot.querySelector('div.lesson-slot-editor')?.remove();

        listSorter(closestUl, createLessonSlotBlock);
        autoWeekDaySave(closestWeekDay);

    })
    // }
    // }
}

// const editFormData = {
//     startTime: formData.get('startTimeEditor')!,
//     endTime: formData.get('endTimeEditor')!,
//     lessonNameEditWindow: formData.get('lessonNameEditorWindow')!,
//     teacherNameEditWindow: formData.get('teacherNameEditorWindow')!,
//     notesEditWindow: formData.get('notesEditorWindow')!,
// }