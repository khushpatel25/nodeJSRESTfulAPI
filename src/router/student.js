const express = require('express')
const router = new express.Router()
const Student = require('../models/students')


// router.get("/khush",(req,res)=>{
//     res.send("huehue")
// })

router.post('/students', async (req, res) => {

    // console.log(req.body)

    try {
        const user = new Student(req.body)
        const result = await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error)
    }

    // user.save().then(()=>{
    //     res.status(201).send(user)
    // })
    // .catch((err)=>{
    //     res.status(500).send(err)
    // })

})

router.get('/students', async (req,res) => {
    try {
        const result = await Student.find()
        res.status(201).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/students/:id',async (req,res) => {
    try {
        const _id =  req.params.id;
        const result = await Student.findById(_id)
       
        if(!result){
            res.status(404).send()
        }else{
            res.status(201).send(result)
            console.log(result)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.patch('/students/:id',async (req,res) => {
    try {
        const _id = req.params.id
        const updateStudent = await Student.findOneAndUpdate(_id,req.body,{
            new:true
        })
        console.log(updateStudent)
        res.status(200).send(updateStudent)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/students/:id',async (req,res) => {
    try {
        const _id = req.params.id
        const deleteStudent = await Student.findOneAndRemove(_id)
        console.log(deleteStudent)
        res.status(200).send(deleteStudent)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router