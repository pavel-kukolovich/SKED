export function formDataCollector(targetBlock: Element): string {
    const closestUl = targetBlock.closest("ul");



    const closestForm = targetBlock.closest("form")!;
    const formData = new FormData(closestForm);

    const creatingFormData = {
        startTime: formData.get('startTime')?.toString()!,
        startTimeHours: Number(formData.get('startTime')?.toString()!.split(':').shift())!,
        startTimeMinutes: Number(formData.get('startTime')?.toString()!.split(':').pop())!,
        endTime: formData.get('endTime')?.toString()!,
        lessonNameCreatorWindow: formData.get('lessonNameCreatorWindow')?.toString()!,
        teacherNameCreatorWindow: formData.get('teacherNameCreatorWindow')?.toString()!,
        notesCreatorWindow: formData.get('notesCreatorWindow')?.toString()!,
    }

    return JSON.stringify(creatingFormData);
}