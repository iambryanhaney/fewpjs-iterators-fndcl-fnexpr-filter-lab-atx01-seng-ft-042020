// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driverName => str.includes(driverName[0]))
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}