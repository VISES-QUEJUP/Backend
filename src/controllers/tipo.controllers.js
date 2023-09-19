import {Tipo} from '../models/tipo.js'



export const getTipos = async(req,res) =>{
    try {
       const tipos = await Tipo.findAll();
       console.log(tipos)
       res.json(tipos)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };

   export const getTipo = async(req,res) =>{
    try {
       const {id} = req.params
       const tipo = await Tipo.findOne({
          where:{id}
       })
       if(!tipo) return res.status(404).json({message:"El Tipo no existe"})
       res.json(tipo)
    } catch (error) {
       return res.status(500).json({message: error.message})
    }
   };


export const createTipo = async(req,res) =>{
    try {
        
            const{tipo,descripcion}=req.body
        
            const newTipo = await Tipo.create({
                
                tipo,
                descripcion,
                
            })
        
            
            res.json(newTipo)
        }
     catch (error) {
        return res.status(500).json({message: error.message})
     
      }
    
    };


export const updateTipo = async (req,res)=>{

     try {
      const {id} = req.params;
      const tipo =await Tipo.findOne({
      where:{id}
   })
        tipo.set(req.body); 
        await tipo.save();
      res.json(tipo);
   } catch (error) {
      return res.status(500).json({ message: error.message})
   }
   }


export const deleteTipo = async (req,res)=>{
    try {
        const {id} = req.params;
        await Tipo.destroy({
          where:{
             id,
          },
        });
        res.sendStatus(204)
       } catch (error) {
        return res.status(500).json({message: error.message})    
       }
}



