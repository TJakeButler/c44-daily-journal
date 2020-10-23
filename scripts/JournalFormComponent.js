// What section of the DOM am I targeting? 

import { saveEntry } from "./JournalDataProvider.js";

const contentTarget = document.querySelector(".entryContainer")
console.log(contentTarget);

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if(clickEvent.target.id === "button"){
        console.log(clickEvent)

        const inputDateValue = document.querySelector("#inputDate").value
        const conceptValue = document.querySelector("#concept").value
        const textareaValue = document.querySelector("#textarea").value
        
        // Create Journal Entry Object
    const newJournalEntryObj = {
        date: inputDateValue,
        concept: conceptValue,
        text: textareaValue,
    }
//send object to database / API / json file
    console.log(newJournalEntryObj)
    saveEntry(newJournalEntryObj)
    }
    
})

export const JournalFormComponent = () => {
    contentTarget.innerHTML = 
    `    
<div class="date">
    <input id="inputDate" type="date">
</div>

<div class="concept">
    <input id="concept" type="text" placeholder="Concept Covered">
</div>

<div class="textarea">
    <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Enter Journal Entry Here"></textarea>
</div>

<div>
    <label id="mood" for="mood">How are you feeling today?</label>
    <select>
        <option value="positive">Positive</option>
        <option value="anxious">Anxious</option>
        <option value="tired">Tired</option>
    </select>
</div>

<div>
    <button id="button" name="record">Record Journal Entry</button>
</div>
`


}

// console.log(JournalFormComponent);

// enter date into forms
// click the button (create a click event)
// when click button grab values from form and put into note object
// clear input fields
//send note object to json file
//finally print json file to DOM

