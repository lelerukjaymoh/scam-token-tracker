import { providerSigner } from "../utils/provider-signer"

class Pool {
    getPoolDeployer = async (txHash: string) => {
        try {
            const deploymentTxnData = await providerSigner.wsProvider.getTransactionReceipt(txHash)
            if (deploymentTxnData) {
                return deploymentTxnData!.from
            }
        } catch (error) {
            console.log("Error getting txn receipt ", error)
        }
    }
}

export const pool = new Pool();