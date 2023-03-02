import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReserveSchema = new Schema({
    date: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    house: {
        type: Schema.Types.ObjectId,
        ref: 'House'
    }
});

export default mongoose.model('Reserve', ReserveSchema)