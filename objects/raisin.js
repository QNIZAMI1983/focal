const raisinAlarm = function (cookie) {
    if (cookie.includes("🍇")) {
        return "Raisin alert!";
    }
    return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));


const raisinAlarmArray = function (cookie) {
    const newArray = cookie.map(cookie => {
        if (cookie.includes("🍇")) {
            return "Raisin alert";
        }
        return "All good!";
    });
    return newArray;
};


console.log(
    raisinAlarmArray([
        ["🍫", "🍫", "🍇", "🍫"],
        ["🍫", "🍇", "🍫", "🍫", "🍇"],
        ["🍫", "🍫", "🍫"],
    ])
);

