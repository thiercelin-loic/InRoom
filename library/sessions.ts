const second = 1000
const minute = second * 60

let users = [{ 
    user: '', 
    time: 0, 
    score: 0,
    location: '', 
    items: [''] 
}]

function get() {
    return users
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
    const update = users.filter((sessions) =>
        sessions.user
            ? sessions
            : null
    )

    console.log('cleaned')
    users = update
}

function overtime() {
    const update = [...users]
    const fifteen = minute * 15
    const delay = current() - fifteen

    update.filter((sessions) => {
        if (sessions.time < delay) {
            console.log(sessions.user, 'expired')
            sessions.user = ''
        }
    })

    users = update
}

function drop(user: string) {
    const update = [...users]

    update.filter((sessions) => {
        if (sessions.user == user) {
            console.log(sessions.user, 'disconnected')
            sessions.user = ''
        }
    })

    users = update
}

function set(
    user: string, 
    score: number, 
    location: string, 
    items: string[]
) {
    const interval = minute / 8
    const time = current()
    const push = {
        user,
        time,
        score,
        location,
        items
    }

    console.log(user, 'connected')

    users.map((sessions) =>
        sessions.user == user
            ? drop(user)
            : null
    )

    users.push(push)

    setInterval(() => {
        overtime()
        clean()
        console.log(users)
    }, interval)
}

const sessions = { get, set, drop }

export default sessions