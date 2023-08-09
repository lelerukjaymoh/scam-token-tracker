import { poolModel } from "../models/pool";

class Listener {
    savedTokenProfiles: string[] = []

    processedTokenListener = async () => {
        // fetch already saved token profiles
        const _savedTokenProfiles = await poolModel.find().lean()
        this.savedTokenProfiles = _savedTokenProfiles.map((tokenProfile: any) => { return tokenProfile.tokenAddress.toLowerCase() })

        // listen for new token profiles saved to db
        const changeStream = poolModel.watch();
        changeStream.on("change", async (change: any) => {
            if (change.operationType == "insert") {

                // TODO: change data to be fetched to reflect the new schema
                const tokenAddress = change.fullDocument.tokenAddress.toLowerCase()
                this.savedTokenProfiles.push(tokenAddress)
            }
        })
    }
}

export const dbListener = new Listener()