(()=>{"use strict";function e(e){const t=e.id,o=e.querySelector("ul"),s=JSON.stringify(o.innerHTML);localStorage.setItem(`${t}-list`,s)}function t(t){if(t!==t.closest("div.week-day")){const o=t.closest("div.week-day");e(o);const s=o?.querySelector("button.save-lesson-slots");s.click()}else{e(t);const o=t?.querySelector("button.save-lesson-slots");o.click()}}function o(e){e.closest("ul");const t=e.closest("form"),o=new FormData(t),s={startTime:o.get("startTime")?.toString(),startTimeHours:Number(o.get("startTime")?.toString().split(":").shift()),startTimeMinutes:Number(o.get("startTime")?.toString().split(":").pop()),endTime:o.get("endTime")?.toString(),lessonNameCreatorWindow:o.get("lessonNameCreatorWindow")?.toString(),teacherNameCreatorWindow:o.get("teacherNameCreatorWindow")?.toString(),notesCreatorWindow:o.get("notesCreatorWindow")?.toString()};return JSON.stringify(s)}function s(e,t){const o=JSON.parse(t),s=document.createElement("li");e?.before(s);const n=e.previousElementSibling;n?.classList.add("lessonSlot"),n.setAttribute("startTimeHours",o.startTimeHours),n.setAttribute("startTimeMinutes",o.startTimeMinutes);const i=document.createElement("div");i.setAttribute("class","lesson");const r=n?.appendChild(i),l=document.createElement("div");l.setAttribute("class","teacher-name"),n.appendChild(l);const a=document.createElement("div");a.setAttribute("class","notes"),n.appendChild(a);const c=document.createElement("div");c.setAttribute("class","lesson-slot-activities");const d=n?.appendChild(c),m=document.createElement("div");m.setAttribute("class","lesson-time"),r?.appendChild(m),document.createElement("span").setAttribute("class","start-time"),document.createElement("span").setAttribute("class","start-time"),o.endTime?m.innerHTML=o.startTime+" - "+o.endTime:m.innerHTML=o.startTime;const u=document.createElement("div");u.setAttribute("class","lesson-name"),r?.appendChild(u);const p=document.createElement("h3");p.innerHTML=o.lessonNameCreatorWindow,u.appendChild(p);const T=document.createElement("span");T.innerHTML=o.teacherNameCreatorWindow,l.appendChild(T);const S=document.createElement("p");S.innerHTML=o.notesCreatorWindow,a.appendChild(S);const b=document.createElement("div");b.setAttribute("class","lesson-slot-activities-buttons"),d.appendChild(b);const E=document.createElement("button");E.setAttribute("class","deleteLessonSlot"),E.innerHTML="Удалить",b.appendChild(E);const g=document.createElement("button");g.setAttribute("class","editLessonSlot"),g.innerHTML="Редактировать",b.appendChild(g)}function n(e,t){const o=e.querySelectorAll("li"),s=[...o].sort((function(e,t){return 3600*Number(e.getAttribute("startTimeHours"))+60*Number(e.getAttribute("startTimeMinutes"))-(3600*Number(t.getAttribute("startTimeHours"))+60*Number(t.getAttribute("startTimeMinutes")))}));console.log(s);for(let e of o)e.remove();for(let e of s)t.before(e)}function i(e,o,s){s.addEventListener("click",(s=>{const i=s.target,r=e.querySelector("div.lesson-slot-creator"),l=i.closest("li.lessonSlot"),a=JSON.parse(function(e){const t=e.closest("form"),o=new FormData(t),s={startTime:o.get("startTimeEditor"),endTime:o.get("endTimeEditor"),startTimeHours:Number(o.get("startTimeEditor")?.toString().split(":").shift()),startTimeMinutes:Number(o.get("startTimeEditor")?.toString().split(":").pop()),lessonNameEditWindow:o.get("lessonNameEditorWindow"),teacherNameEditWindow:o.get("teacherNameEditorWindow"),notesEditWindow:o.get("notesEditorWindow")};return JSON.stringify(s)}(i)),c={lessonTime:l?.querySelector("div.lesson-time"),lessonStartTime:l?.querySelector("div.lesson-time")?.innerHTML.split(" - ").shift(),lessonEndTime:l?.querySelector("div.lesson-time")?.innerHTML.split(" - ").pop(),lessonName:l?.querySelector("h3"),teacherName:l?.querySelector("div.teacher-name > span"),notes:l?.querySelector("div.notes > p")};if(a.startTime&&(l.setAttribute("startTimeHours",a.startTimeHours),l.setAttribute("startTimeMinutes",a.startTimeMinutes)),a.startTime&&a.endTime&&(c.lessonTime.innerHTML="",c.lessonTime.innerHTML=a.startTime+" - "+a.endTime),a.startTime&&!a.endTime){const e=c.lessonTime.innerHTML=` - ${c.lessonEndTime}`;c.lessonTime.innerHTML=a.startTime+e}if(!a.startTime&&a.endTime){const e=c.lessonTime.innerHTML=`${c.lessonStartTime} - `;c.lessonTime.innerHTML=e+a.endTime}a.lessonNameEditWindow&&(c.lessonName.innerHTML="",c.lessonName.innerHTML=a.lessonNameEditWindow),a.teacherNameEditWindow&&(c.teacherName.innerHTML="",c.teacherName.innerHTML=a.teacherNameEditWindow),a.notesEditWindow&&(c.notes.innerHTML="",c.notes.innerHTML=a.notesEditWindow),l.querySelector("div.lesson-slot-editor")?.remove(),n(o,r),t(e)}))}document.getElementById("html"),function(){const e=document.getElementById("html");let t=document.querySelector("input[type=checkbox]"),o=window.localStorage.getItem("htmlClassList");t.onclick=function(){t.checked?(e.classList.add("dark"),window.localStorage.setItem("htmlClassList",e.classList.value),window.localStorage.setItem("checkboxState","checked")):t.checked||(e.classList.remove("dark"),window.localStorage.setItem("htmlClassList",e.classList.value),window.localStorage.setItem("checkboxState","notChecked"))},"dark"===o&&(t.checked=!0,e.classList.add("dark"))}(),function(){const e=document.querySelectorAll("div.week-day");for(let t of e){let e=t.id,o=JSON.parse(localStorage.getItem(`${e}-list`));if(o){const e=t.querySelector("ul.lessons");e.querySelector("div")?.remove(),e.innerHTML=`${o}`}}}(),setInterval((()=>{const e=JSON.parse(localStorage.getItem("monday-list")),t=JSON.parse(localStorage.getItem("tuesday-list")),o=JSON.parse(localStorage.getItem("wednesday-list")),s=JSON.parse(localStorage.getItem("thursday-list")),n=JSON.parse(localStorage.getItem("friday-list")),i=JSON.parse(localStorage.getItem("saturday-list")),r=JSON.parse(localStorage.getItem("sunday-list"));console.log(e),console.log(t),console.log(o),console.log(s),console.log(n),console.log(i),console.log(r)}),3e6),function(){const e=document.querySelectorAll("button.addLessonSlot");for(let t of e)t.addEventListener("click",(()=>{const e=t.parentElement?.parentElement?.parentElement;e.querySelector("div.lesson-slot-creator").classList.remove("displayNone")}))}(),setInterval((function(){const e=document.querySelectorAll("button.deleteLessonSlot");for(let o of e)o.addEventListener("click",(e=>{const o=e.target,s=(o.closest("li.lessonSlot"),o.closest("div.week-day"));o.closest("li.lessonSlot")?.remove(),t(s)}))}),300),function(){const e=document.querySelectorAll("button.create-lesson-slot");for(let i of e)i.addEventListener("click",(e=>{const i=e.target,r=i.closest("ul"),l=r.querySelector("div.lesson-slot-creator");s(l,o(i)),n(r,l),l.classList.add("displayNone"),t(l)}))}(),setInterval((function(){const e=document.querySelectorAll("button.editLessonSlot");for(let t of e)t.addEventListener("click",(e=>{const t=e.target,o=t.closest("li.lessonSlot"),s=o.closest("ul"),n=t.closest("div.week-day");if(!o.querySelector("div.lesson-slot-editor")){const e=o?.querySelector("div.lesson-time")?.innerHTML,t=e?.split(" - "),r=t?.shift(),l=t?.shift(),a=o?.querySelector("h3")?.innerHTML,c=o?.querySelector("div.teacher-name > span")?.innerHTML,d=o?.querySelector("div.notes > p")?.innerHTML;console.log(t),console.log(r),console.log(l),console.log(a),console.log(c),console.log(d);const m=document.createElement("div");m.setAttribute("class","lesson-slot-editor");const u=o?.appendChild(m),p=document.createElement("form");p.setAttribute("class","editForm"),p.setAttribute("method","POST");const T=u?.appendChild(p),S=document.createElement("div");S.setAttribute("class","lessonTimeEditor");const b=T?.appendChild(S),E=document.createElement("label");E.setAttribute("for","startTimeEditor"),E.innerHTML="С";const g=document.createElement("input");g.setAttribute("type","time"),g.setAttribute("name","startTimeEditor"),g.setAttribute("id","startTimeEditor");const h=document.createElement("label");h.setAttribute("for","endTimeEditor"),h.innerHTML="По";const A=document.createElement("input");A.setAttribute("type","time"),A.setAttribute("name","endTimeEditor"),A.setAttribute("id","endTimeEditor"),b?.appendChild(E),b?.appendChild(g),b?.appendChild(h),b?.appendChild(A);const f=document.createElement("div");f.setAttribute("class","lessonNameEditor");const v=T?.appendChild(f),y=document.createElement("label");y.setAttribute("for","lessonNameEditorWindow");const L=document.createElement("input");L.setAttribute("type","text"),L.setAttribute("name","lessonNameEditorWindow"),L.setAttribute("id","lessonNameEditorWindow"),L.setAttribute("placeholder",a),v?.appendChild(y),v?.appendChild(L);const N=document.createElement("div");N.setAttribute("class","teacherNameEditor");const w=T?.appendChild(N),C=document.createElement("label");C.setAttribute("for","teacherNameCreatorWindow");const H=document.createElement("input");H.setAttribute("type","text"),H.setAttribute("name","teacherNameEditorWindow"),H.setAttribute("id","teacherNameEditorWindow"),H.setAttribute("placeholder",c),w?.appendChild(C),w?.appendChild(H);const M=document.createElement("div");M.setAttribute("class","notesEditor");const q=T?.appendChild(M),W=document.createElement("label");W.setAttribute("for","notesEditorWindow");const k=document.createElement("textarea");k.setAttribute("name","notesEditorWindow"),k.setAttribute("id","notesEditorWindow"),k.setAttribute("placeholder",d),q?.appendChild(W),q?.appendChild(k);const I=document.createElement("button");I.setAttribute("class","save-lesson-slot"),I.setAttribute("type","button"),I.innerHTML="Сохранить изменения";const O=T?.appendChild(I);i(n,s,O)}}))}),300),function(){const e=document.querySelectorAll("button.deleteAllSlots");for(let o of e)o.addEventListener("click",(e=>{const o=e.target.closest("div.week-day"),s=o?.querySelector("ul"),n=s?.querySelectorAll("li");for(let e of n)e.remove();t(o)}))}()})();
//# sourceMappingURL=main.1253209302913b6f9c93.js.map