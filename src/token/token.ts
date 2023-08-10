import { CONSTANTS } from "../config/constants"
import { helpers } from "../utils/helpers"

class Token {
    fetchTokenDeployer = async (address: string) => {
        try {
            const fetchDeployerUrl = `https://api.bscscan.com/api?module=contract&action=getcontractcreation&contractaddresses=${address}&apikey=${CONSTANTS.ETHERSCAN_API_KEY}`
            const deployData = await helpers.axiosGet(fetchDeployerUrl)

            console.log("deployData: ", deployData)

            const deployer = deployData.result[0].contractCreator
            const deploymentTxn = deployData.result[0].txHash

            return { deployer, deploymentTxn }
        } catch (error) {
            console.log("Error fetching token deployer: ", error)
        }

    }
}

export const token = new Token();