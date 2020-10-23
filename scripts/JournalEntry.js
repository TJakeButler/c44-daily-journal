/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            Entry number: ${entry.id},
            Entry date: ${entry.date},
            Etnry concept: ${entry.concept},
            ${entry.entry}
            My mood: ${entry.mood}
        </section>
    `
}




