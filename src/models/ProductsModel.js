import { Schema, model} from "mongoose";

const productsSchema = new Schema ({
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    precio:{
        type: Number
    },
    stock:{
        type:Number
    },
    marca:{
        type: String
    },
    fechaVencimiento:{
        type:Date
    }
    },{
        timestamps: true,
        strict: false
    }
)

export default model ("Products", productsSchema)