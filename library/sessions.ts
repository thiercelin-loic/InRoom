interface user {
    name: string,
    location: string,
    items: string[],
    time: number,
    score: number,
    rated: number,
    rank: number
}

const sessions = { get, set, rate, drop }

const second = 1000
const minute = second * 60
const interval = minute / 8
const hundred = 100
const fifteen = minute * 15
const delay = current() - fifteen
const time = current()
const rank = 0

let users = [{
    name: '',
    location: '',
    items: [''],
    time: 0,
    score: 0,
    rated: 0,
    rank: 0
}]

let sum = 0
let frequency = 0
let rated = 0

let easy = false
let medium = false
let hard = false

function get() { return users }

function addition(user: user) {
    sum += user.score
}

function percent(update: user) {
    frequency = update.score / sum
    rated = frequency * hundred
    update.rated = rated
}

function evaluate(update: user) {
    easy = update.rated < 25

    medium = update.rated > 25
        && update.rated < 50

    hard = update.rated > 50
        && update.rated < 75

    if (easy) update.rank = 0
    else if (medium) update.rank = 1
    else if (hard) update.rank = 2
    else update.rank = 3
}

function filter(user: user) {
    if (user.name) return user
}

function stop(update: user) {
    if (update.time < delay) {
        console.log(update.name, 'expired')
        update.name = ''
    }
}

function unjoin(update: user, name: string) {
    if (update.name == name) {
        console.log(update.name, 'unjoining')
        update.name = ''
    }
}

function short(current: number) {
    const string = current.toString()
    const length = string.substring(8)
    const short = parseInt(length)
    return short
}

function current() {
    const date = new Date()
    const time = date.getTime()
    const current = short(time)
    return current
}

function clean() {
    const updates = users.filter(filter)
    console.log('sessions cleaned')
    users = updates
}

function overtime() {
    const updates = [...users]
    updates.filter(stop)
    users = updates
}

function drop(name: string) {
    const updates = [...users]
    updates.filter((update) =>
        unjoin(update, name)
    )

    users = updates
}

function rate() {
    const updates = [...users]

    users.map(addition)
    updates.filter(percent)
    updates.filter(evaluate)

    users = updates
}

function set(
    name: string,
    location: string,
    items: string[],
    score: number
) {
    users.map((user) => {
        if (user.name == name) 
            drop(name)
    })

    users.push({
        name,
        location,
        items,
        time,
        score,
        rated,
        rank
    })
}

setInterval(clean, interval)
setInterval(overtime, interval)
setInterval(rate, interval)

export default sessions