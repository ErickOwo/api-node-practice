const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
  try{
    const arrayMascota = await Mascota.find();
    res.send(arrayMascota);
  }
  catch(e){
    console.log(e);
  }
})

router.post('/', async (req, res) => {
  try{
    const body = req.body;
    const mascotaDB = new Mascota(body);
    await mascotaDB.save();

    console.log("mascota creada:" + mascotaDB);
    res.send("mascota agregada correctamente");
  }
  catch(e){
    console.log(e);
    res.send(e);
  }
})

router.get('/:id', async (req, res) => {
  try{
    const _id = req.params.id;
    const mascotaDB = await Mascota.findOne({_id});
    res.send(mascotaDB);
  }
  catch(e){
    console.log(e);
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const _id = req.params.id;
    const mascotaDB = await Mascota.findByIdAndDelete({_id});
    res.send('Mascota eliminada: ' + mascotaDB);
  }
  catch(e){
    console.log(e);
  }
})

router.put('/:id', async (req, res) =>{
  try{
    const _id = req.params.id;
    const body = req.body;
    const mascotaDB = await Mascota.findByIdAndUpdate(
      _id,
      body,
      {
        useFindAndModify: false
      }
    );
    res.send('Mascota modificada: ' + mascotaDB);
  }
  catch(e){
    console.log(e);
  }
})


module.exports = router;