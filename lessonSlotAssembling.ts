export function lessonSlotAssembling(createLessonSlotBlock: HTMLDivElement, FormData: string) {
    
    const creatingFormData = JSON.parse(FormData)
    
    // Создание элемента li с "внутренностями"
    const newLessonSlot = document.createElement("li");
    createLessonSlotBlock?.before(newLessonSlot);
    const lastLiElement = createLessonSlotBlock!.previousElementSibling as Element;
    lastLiElement?.classList.add("lessonSlot");
    lastLiElement.setAttribute("startTimeHours", creatingFormData.startTimeHours);
    lastLiElement.setAttribute("startTimeMinutes", creatingFormData.startTimeMinutes);


    const lessonDiv = document.createElement("div");
    lessonDiv.setAttribute("class", "lesson");
    const lessonDoneDiv = lastLiElement?.appendChild(lessonDiv);

    const teacherNameDiv = document.createElement("div");
    teacherNameDiv.setAttribute("class", "teacher-name");
    const teacherNameDoneDiv = lastLiElement!.appendChild(teacherNameDiv);


    const notesDiv = document.createElement("div");
    notesDiv.setAttribute("class", "notes");
    const notesDoneDiv = lastLiElement!.appendChild(notesDiv);


    const lessonSlotActivitiesDiv = document.createElement("div");
    lessonSlotActivitiesDiv.setAttribute("class", "lesson-slot-activities");
    const lessonSlotActivitiesDoneDiv = lastLiElement?.appendChild(lessonSlotActivitiesDiv);

    // Создание "внутренностей" блока с классом lesson


    // создание блока lesson-time и его внутренностей
    const lessonTimeDiv = document.createElement("div");
    lessonTimeDiv.setAttribute("class", "lesson-time");
    lessonDoneDiv?.appendChild(lessonTimeDiv);

    const lessonStartTimeSpan = document.createElement("span");
    lessonStartTimeSpan.setAttribute("class", "start-time");


    const lessonEndTimeSpan = document.createElement("span");
    lessonEndTimeSpan.setAttribute("class", "start-time");

    if (creatingFormData.endTime) {
        lessonTimeDiv.innerHTML = creatingFormData.startTime + " - " + creatingFormData.endTime;
    } else {
        lessonTimeDiv.innerHTML = creatingFormData.startTime
    }



    // создание блока lesson-name и его внутренностей

    const lessonNameDiv = document.createElement("div");
    lessonNameDiv.setAttribute("class", "lesson-name")
    lessonDoneDiv?.appendChild(lessonNameDiv);

    const lessonNameHeader = document.createElement("h3");


    lessonNameHeader.innerHTML = creatingFormData.lessonNameCreatorWindow;

    lessonNameDiv.appendChild(lessonNameHeader);

    // создание внутренностей блока teacher-name

    const teacherNameSpan = document.createElement("span");
    teacherNameSpan.innerHTML = creatingFormData.teacherNameCreatorWindow;

    teacherNameDiv.appendChild(teacherNameSpan);

    // создание внутренностей блока notes

    const notesParagraph = document.createElement("p");
    notesParagraph.innerHTML = creatingFormData.notesCreatorWindow;

    notesDiv.appendChild(notesParagraph);

    // создание внутренностей блока lesson-slot-activities

    // создание блока lesson-slot-activities-buttons
    const lessonSlotActivitiesButtonsDiv = document.createElement("div");
    lessonSlotActivitiesButtonsDiv.setAttribute("class", "lesson-slot-activities-buttons");

    lessonSlotActivitiesDoneDiv.appendChild(lessonSlotActivitiesButtonsDiv);

    // создание кнопок

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "deleteLessonSlot");
    deleteButton.innerHTML = "Удалить"
    const lessonSlotActivitiesDeleteButton = lessonSlotActivitiesButtonsDiv.appendChild(deleteButton);

    const redactButton = document.createElement("button");
    redactButton.setAttribute("class", "editLessonSlot");
    redactButton.innerHTML = "Редактировать"
    lessonSlotActivitiesButtonsDiv.appendChild(redactButton);
}