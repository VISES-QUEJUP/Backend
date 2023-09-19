import {Queja} from '../models/queja.js'



export const getQuejas = async(req,res) =>{
    try {
       const queja = await Queja.findAll();
       console.log(queja)
       res.json(queja)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };

   export const getQueja = async(req,res) =>{
    try {
       const {id} = req.params
       const queja = await Queja.findOne({
          where:{id}
       })
       if(!queja) return res.status(404).json({message:"La queja no existe"})
       res.json(queja)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };


export const createQueja = async(req,res) =>{
    try {
        
            const{cuerpo,imagen,ubicación}=req.body
        
            const newQueja = await Queja.create({
                cuerpo,
                imagen,
                ubicación,
    
            })
        
            
            res.json(newQueja)
        }
     catch (error) {
        return res.status(500).json({message: error.message})
     
      }
    
    };


export const updateQueja = async (req,res)=>{

     try {
      const {id} = req.params;
      const queja =await Queja.findOne({
      where:{id}
   })
   queja.set(req.body); 
        await queja.save();
      res.json(queja);
   } catch (error) {
      return res.status(500).json({ message: error.message})
   }
   }


export const deleteQueja = async (req,res)=>{
    try {
        const {id} = req.params;
        await Queja.destroy({
          where:{
             id,
          },
        });
        res.sendStatus(204)
       } catch (error) {
        return res.status(500).json({message: error.message})    
       }
}

