export function editFormDataCollector (target: Element): string{
    const closestForm = target.closest('form')!;
    const formData = new FormData(closestForm);

    const editFormData = {
        startTime: formData.get('startTimeEditor')!,
        endTime: formData.get('endTimeEditor')!,
        startTimeHours: Number(formData.get('startTimeEditor')?.toString()!.split(':').shift())!,
        startTimeMinutes: Number(formData.get('startTimeEditor')?.toString()!.split(':').pop())!,
        lessonNameEditWindow: formData.get('lessonNameEditorWindow')!,
        teacherNameEditWindow: formData.get('teacherNameEditorWindow')!,
        notesEditWindow: formData.get('notesEditorWindow')!,
    }

    return JSON.stringify(editFormData);
}