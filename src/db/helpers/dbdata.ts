import { IPool } from "../../interface/types"
import { poolModel } from "../models/pool"

class DBData {
    async fetchPools() {
        try {
            return poolModel.find().lean()
        } catch (error) {
            console.log("Error fetching pools from the db ", error)
        }
    }

    async savePools(pools: IPool[]) {
        try {
            return poolModel.insertMany(pools, { ordered: false })
        } catch (error) {
            console.log("Error saving many pools to the db ", error)
        }
    }

    async saveSinglePool(pool: IPool) {
        try {
            const _pool = new poolModel(pool)
            await _pool.save()
        } catch (error) {
            console.log("Error saving pool to the db ", error)
        }
    }
}

export const dBData = new DBData()