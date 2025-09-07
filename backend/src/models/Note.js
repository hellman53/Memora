import mongoose, { trusted } from "mongoose";

// 1st step: You need to create a schema
//2nd step: You would create a model based off of that schema

const noteSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:trusted
        },
        content:{
            type:String,
            required:trusted
        }
    },
    {timestamps: true}
);

const Note = mongoose.model("Note", noteSchema);

export default Note;