// code your solution here
function mondayWork(action) {
    let monAction;
    action === undefined
    ? monAction = "This Monday, I will go to the office."
    : monAction = `This Monday, I will ${action}.`;

    return monAction;
}

function saturdayFun(action) {
    let satAction;
    action === undefined
    ? satAction = "This Saturday, I want to roller-skate!"
    : satAction = `This Saturday, I want to ${action}!`;

    return satAction;
}

function wrapAdjective(flair = '*') {
    return function(string) {
            return `You are ${flair}${string}${flair}!`
    }
}