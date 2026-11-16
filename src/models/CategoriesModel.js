import { Schema, model} from "mongoose";

const categoriesSchema = new Schema ({
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    estado:{
        type: String, enum:["activa", "inactiva"],
        default: "activa"},
    },
    {timestamps: true, strict: false}
   
)

export default model ("Categories", categoriesSchema)