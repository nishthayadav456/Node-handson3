const mess=require("../middleware/mess")
const {bollywoodControler,hollywoodControler,technologyControler,fitnessControler,foodControler}=require('../routing/categoryControl')
const categoryRouting=require("express").Router()
categoryRouting.get("/bollywood",mess,bollywoodControler)
    
categoryRouting.get("/hollywood",mess,hollywoodControler)
   
    categoryRouting.get("/Technology",technologyControler)
    categoryRouting.get("/fitness",fitnessControler )
    categoryRouting.get("/food",foodControler)
module.exports=categoryRouting