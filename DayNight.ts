export function DayNight(): string {
    const html = document.getElementById('html') as HTMLElement;
    let checkbox = document.querySelector('input[type=checkbox]') as HTMLInputElement;
    let lastHtmlClass = window.localStorage.getItem('htmlClassList')!;
    
    checkbox.onclick = function () {
        if (checkbox.checked) {
            html.classList.add('dark');
            window.localStorage.setItem('htmlClassList', html.classList.value);
            window.localStorage.setItem('checkboxState', 'checked')
        } else if (!checkbox.checked) {
            html.classList.remove('dark');
            window.localStorage.setItem('htmlClassList', html.classList.value);
            window.localStorage.setItem('checkboxState', 'notChecked')
        }
    }

    if (lastHtmlClass === 'dark') {
        checkbox.checked = true;
        html.classList.add('dark');
    }

    return lastHtmlClass;
}