const {bollywood,hollywood,Technology,fitness, food}=require("./data")
const bollywoodControler=(req,res)=>{
return res.send(bollywood)
}
const hollywoodControler=(req,res)=>{
    return res.send(hollywood)
    }
    const technologyControler=(req,res)=>{
        return res.send(Technology)
        }
        const fitnessControler=(req,res)=>{
            return res.send(fitness)
            }
            const foodControler=(req,res)=>{
                return res.send(food)
                }
module.exports={bollywoodControler,hollywoodControler,technologyControler,fitnessControler,foodControler}