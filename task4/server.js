const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let users = [
    {id: 1, name: 'name1', email: 'email1', registrationTime: '12-10-2021', lastLoginTime: '12-10-2021', status: true},
    {id: 2, name: 'name2', email: 'email2', registrationTime: '12-10-2021', lastLoginTime: '12-10-2021', status: false},
    {id: 3, name: 'name3', email: 'email3', registrationTime: '12-10-2021', lastLoginTime: '12-10-2021', status: true},
]

app.get('/api/users', async (req, res) => {
    res.status(200).json({data: users})
})

app.delete('/api/delete', async (req, res) => {

    const {ids} = req.body

    let newUsers = {}

    ids.forEach(id => {
        users.forEach(user => {
            if(id !== user.id){
               newUsers = {
                   ...newUsers,
                   [user.id]: user
               }
            }
        })
    })

    users = [...Object.values(newUsers)]

    res.json({data: Object.values(newUsers)})
})

app.put('/api/block', async (req, res) => {

    const {ids} = req.body

    let remainingUsers = {}

    ids.forEach(id => {
        users.forEach(u => {
            if(id === u.id){
                remainingUsers = {
                    ...remainingUsers,
                    [u.id]: {...u, status: false}
                }
            }else {
                if(!remainingUsers[u.id]){
                    remainingUsers = {
                        ...remainingUsers,
                        [u.id]: {...u}
                    }
                }
            }
        })
    })

    users = [...Object.values(remainingUsers)]

    res.json({data: Object.values(remainingUsers)})

})

app.put('/api/unblock', async (req, res) => {

    const {ids} = req.body

    let remainingUsers = {}

    ids.forEach(id => {
        users.forEach(u => {
            if(id === u.id){
                remainingUsers = {
                    ...remainingUsers,
                    [u.id]: {...u, status: true}
                }
            }else {
                if(!remainingUsers[u.id]){
                    remainingUsers = {
                        ...remainingUsers,
                        [u.id]: {...u}
                    }
                }
            }
        })
    })

    users = [...Object.values(remainingUsers)]

    res.json({data: Object.values(remainingUsers)})

})


const start = async () => {
    try {

        await app.listen(8082, () => console.log('Server has been started in port 5000'))

    }catch (e) {
        console.log('server start error', e)
        process.exit(0)
    }
}

start()