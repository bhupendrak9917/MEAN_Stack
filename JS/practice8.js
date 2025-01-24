function daysUntil(date) {
    const today = new Date()
    const diffInMs = date - today
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24)
    return diffInDays
}
const nextBirthday = new Date("2024-12-25")
console.log("Days until next birthday:", daysUntil(nextBirthday))
