
import { IPool } from "../../interface/types";
import { Schema, model } from "mongoose";

const poolsSchema = new Schema<IPool>({
    poolAddress: { type: String, unique: true },
    token: { type: String },
    pairToken: { type: String },
    honeyPot: { type: Boolean },
    holders: { type: Number },
    routerAddress: { type: String },
    creationTxn: { type: String },
    createdAt: { type: Number },
    deployer: { type: String },
    liquiditySupplier: { type: String },
    liquidityRemover: { type: String },
})

export const poolModel = model<IPool>("pools", poolsSchema)