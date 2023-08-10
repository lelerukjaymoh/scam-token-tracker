import { CONSTANTS } from "../config/constants"
import { helpers } from "../utils/helpers"

class Txns {
    getAddressTxns = async (address: string) => {
        const fetchAddressTxnUrl = `https://api.bscscan.com/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${CONSTANTS.ETHERSCAN_API_KEY}`
        const txns = await helpers.axiosGet(fetchAddressTxnUrl)

        return txns.result
    }
}

export const txns = new Txns();