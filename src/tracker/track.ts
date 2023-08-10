import { token } from "../token";
import { txns } from "../txns";

class Tracker {
    track = async () => {
        // At the moment the program assumes that the token has already been found to be a rug token
        // Implementation tp check if token is rug to be implemented later
        const tokenAddress = "0x90500b067A9B24dcB4834a839C44EEc90b2CD9Ac"

        const deploymentData = await token.fetchTokenDeployer(tokenAddress)

        // Fetch the initial liquidity supplier

        // Fetch the rugger address

        if (deploymentData) {
            // Check if the deployer has deployed any other tokens 

            const _txns = await txns.getAddressTxns(deploymentData.deployer)

            // Save all the tokens the address has deployed
            const tokensDeployed = []

            for (const txn of _txns) {
                if (txn.to === "") {
                    tokensDeployed.push(txn.contractAddress)
                }
            }

            console.log("tokensDeployed: ", tokensDeployed)

        }
    }
}

export const tracker = new Tracker();