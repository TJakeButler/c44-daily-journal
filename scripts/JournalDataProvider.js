/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "10/10/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Anxious"
    },
    {
        id: 2,
        date: "10/11/2020",
        concept: "HTML & CSS",
        entry: "We learned about functions and modularizing code",
        mood: "Tired"
    },
    {
        id: 3,
        date: "10/12/2020",
        concept: "HTML & CSS",
        entry: "We learned to take breaks over the weekend to let concepts solidify",
        mood: "Positive"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

