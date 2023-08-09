
import { IPool } from "../../interface/types";
import { Schema, model } from "mongoose";

const poolsSchema = new Schema<IPool>({
    poolAddress: {
        type: String,
        unique: true
    }
})

export const poolModel = model<IPool>("pools", poolsSchema)