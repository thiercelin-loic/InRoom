const second = 1000
const minute = second * 60

let list = [{ user: '', time: 0, }]

function get() {
    return list
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
    const update = list.filter((sessions) =>
        sessions.user
            ? sessions
            : null
    )

    console.log('list cleaned')
    list = update
}

function overtime() {
    const update = [...list]
    const fifteen = minute * 15
    const delay = current() - fifteen

    update.filter((sessions) => {
        if (sessions.time < delay) {
            console.log(sessions.user, 'expired')
            sessions.user = ''
        }
    })

    list = update
}

function stop(user: string) {
    const update = [...list]

    update.filter((sessions) => {
        if (sessions.user == user) {
            console.log(sessions.user, 'disconnected')
            sessions.user = ''
        }
    })

    list = update
}

function start(user: string) {
    const interval = minute / 8
    const time = current()
    const push = {
        user,
        time,
    }

    console.log(user, 'connected')

    list.map((sessions) =>
        sessions.user == user
            ? stop(user)
            : null
    )

    list.push(push)

    setInterval(() => {
        overtime()
        clean()
    }, interval)
}

const sessions = { get, start, stop }

export default sessions