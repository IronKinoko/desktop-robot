import robot from 'robotjs'
import express from 'express'

const PORT = process.env.PORT || 4444
const app = express()
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

// https://robotjs.io/docs/syntax#keys
app.post('/api/tap', (req, res) => {
  const { key, modifier } = req.query as { key: string; modifier: string | string[] }
  if (!key) return res.json({ ok: false, message: 'require key' })
  try {
    if (modifier) robot.keyTap(key, modifier)
    else robot.keyTap(key)
    res.json({ ok: true, key, modifier })
  } catch (error) {
    res.json({ ok: false, message: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`server run in http://localhost:${PORT}`)
})
