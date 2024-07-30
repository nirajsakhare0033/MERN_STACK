import express from 'express'

const router = express.Router()

router.get('/all', (req,res) => {res.send("get method in router")
})
router.post('/post', (req, res) => {
  res.send("post method in router")
})
router.put('/put', (req, res) => {
  res.send("put method in router")
})
router.delete('/delete', (req, res) => {
  res.send("delete method in router")
});

export default router;