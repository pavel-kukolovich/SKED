import { autoWeekDaySave } from "./autoWeekDaySave";
import { listSorter } from "./listSorter";
import { saveEdits } from "./saveEdits";

export function editLessonSlot() {
    const editButtons = document.querySelectorAll('button.editLessonSlot');

    for (let button of editButtons) {
        button.addEventListener('click', (event) => {
            const targetedButton = event.target as Element;

            const closestLessonSlot = targetedButton.closest('li.lessonSlot')!;
            const closestUl = closestLessonSlot.closest('ul') as HTMLUListElement;
            const closestWeekDay = targetedButton.closest('div.week-day') as HTMLDivElement;

            if (!closestLessonSlot.querySelector('div.lesson-slot-editor')) {
                // Получение startTime и endTime
                const lessonTime = closestLessonSlot?.querySelector('div.lesson-time')?.innerHTML;
                const splitTime = lessonTime?.split(' - ')
                const startTime = splitTime?.shift();
                const endTime = splitTime?.shift();
                // 

                // Получение lessonName
                const lessonName = closestLessonSlot?.querySelector('h3')?.innerHTML!;
                // 

                // Получение teacherName
                const teacherName = closestLessonSlot?.querySelector('div.teacher-name > span')?.innerHTML!;
                //

                //  Получение notes
                const notes = closestLessonSlot?.querySelector('div.notes > p')?.innerHTML!;
                // 

                console.log(splitTime);
                console.log(startTime);
                console.log(endTime);
                console.log(lessonName);
                console.log(teacherName);
                console.log(notes);

                // создание блока для формы (lesson-slot-editor)
                const editFormDiv = document.createElement('div');
                editFormDiv.setAttribute('class', 'lesson-slot-editor');

                const existingEditFormDiv = closestLessonSlot?.appendChild(editFormDiv);
                // 

                // создание формы для редактирования
                const editForm = document.createElement('form');
                editForm.setAttribute('class', 'editForm');
                editForm.setAttribute('method', 'POST');

                const existingEditForm = existingEditFormDiv?.appendChild(editForm);
                //

                // создание блока lessonTimeEditor
                const lessonTimeEditorDiv = document.createElement('div');
                lessonTimeEditorDiv.setAttribute('class', 'lessonTimeEditor');

                const existingLessonTimeEditorDiv = existingEditForm?.appendChild(lessonTimeEditorDiv);
                //

                // создание input`ов для редактирования времени
                const labelStartTime = document.createElement('label');
                labelStartTime.setAttribute('for', 'startTimeEditor');
                labelStartTime.innerHTML = 'С';

                const inputStartTime = document.createElement('input');
                inputStartTime.setAttribute('type', 'time');
                inputStartTime.setAttribute('name', 'startTimeEditor');
                inputStartTime.setAttribute('id', 'startTimeEditor');


                const labelEndTime = document.createElement('label');
                labelEndTime.setAttribute('for', 'endTimeEditor');
                labelEndTime.innerHTML = 'По';

                const inputEndTime = document.createElement('input');
                inputEndTime.setAttribute('type', 'time');
                inputEndTime.setAttribute('name', 'endTimeEditor');
                inputEndTime.setAttribute('id', 'endTimeEditor');


                existingLessonTimeEditorDiv?.appendChild(labelStartTime);
                existingLessonTimeEditorDiv?.appendChild(inputStartTime);
                existingLessonTimeEditorDiv?.appendChild(labelEndTime);
                existingLessonTimeEditorDiv?.appendChild(inputEndTime);
                // 

                // создание блока lessonNameEditor
                const lessonNameEditorDiv = document.createElement('div');
                lessonNameEditorDiv.setAttribute('class', 'lessonNameEditor');

                const existingLessonNameEditorDiv = existingEditForm?.appendChild(lessonNameEditorDiv);
                //

                // создание input`ов для lessonNameEditor
                const labelLessonNameEditorWindow = document.createElement('label');
                labelLessonNameEditorWindow.setAttribute('for', 'lessonNameEditorWindow');

                const iputLessonNameEditorWindow = document.createElement('input');
                iputLessonNameEditorWindow.setAttribute('type', 'text');
                iputLessonNameEditorWindow.setAttribute('name', 'lessonNameEditorWindow');
                iputLessonNameEditorWindow.setAttribute('id', 'lessonNameEditorWindow');
                iputLessonNameEditorWindow.setAttribute('placeholder', lessonName);

                const existingLabelLessonNameEditorWindow = existingLessonNameEditorDiv?.appendChild(labelLessonNameEditorWindow);
                const existingInputLessonNameEditorWindow = existingLessonNameEditorDiv?.appendChild(iputLessonNameEditorWindow);
                // 

                // создание блока teacherNameEditor
                const teacherNameEditorDiv = document.createElement('div');
                teacherNameEditorDiv.setAttribute('class', 'teacherNameEditor');

                const existingTeacherNameEditorDiv = existingEditForm?.appendChild(teacherNameEditorDiv);
                // 

                // создание input`ов для teacherNameEditor
                const labelTeacherNameEditorWindow = document.createElement('label');
                labelTeacherNameEditorWindow.setAttribute('for', 'teacherNameCreatorWindow');

                const inputTeacherNameEditorWindow = document.createElement('input');
                inputTeacherNameEditorWindow.setAttribute('type', 'text');
                inputTeacherNameEditorWindow.setAttribute('name', 'teacherNameEditorWindow');
                inputTeacherNameEditorWindow.setAttribute('id', 'teacherNameEditorWindow');
                inputTeacherNameEditorWindow.setAttribute('placeholder', teacherName);

                const existingLabelTeacherNameEditorWindow = existingTeacherNameEditorDiv?.appendChild(labelTeacherNameEditorWindow);
                const existingInputTeacherNameEditorWindow = existingTeacherNameEditorDiv?.appendChild(inputTeacherNameEditorWindow);
                // 

                // создание блока notesEditor
                const notesEditorDiv = document.createElement('div');
                notesEditorDiv.setAttribute('class', 'notesEditor');

                const existingNotesEditorDiv = existingEditForm?.appendChild(notesEditorDiv);
                // 

                // создание textarea для заметок
                const labelNotesEditorWindow = document.createElement('label');
                labelNotesEditorWindow.setAttribute('for', 'notesEditorWindow');

                const textareaNotesEditorWindow = document.createElement('textarea');
                textareaNotesEditorWindow.setAttribute('name', 'notesEditorWindow');
                textareaNotesEditorWindow.setAttribute('id', 'notesEditorWindow');
                textareaNotesEditorWindow.setAttribute('placeholder', notes);

                const existingLabelNotesEditorWindow = existingNotesEditorDiv?.appendChild(labelNotesEditorWindow);
                const existingTextareaNotesEditorWindow = existingNotesEditorDiv?.appendChild(textareaNotesEditorWindow);
                // 

                // создание кнопки "сохранить"
                const saveEditsButton = document.createElement('button');
                saveEditsButton.setAttribute('class', 'save-lesson-slot');
                saveEditsButton.setAttribute('type', 'button');
                saveEditsButton.innerHTML = 'Сохранить изменения';

                const existingSaveEditsButton = existingEditForm?.appendChild(saveEditsButton) as HTMLButtonElement;
                // 

                saveEdits(closestWeekDay, closestUl, existingSaveEditsButton);
            }
        })
    }
}