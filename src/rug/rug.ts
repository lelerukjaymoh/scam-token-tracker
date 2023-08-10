import { IPool } from "../interface/types";
import { pool } from "../pool";
import { helpers } from "../utils/helpers";

class Rug {
    checkRugStatus = async (tokenAddress: string) => {
        const pairs = await this.getTokenPairs(tokenAddress)

        if (pairs) {
            // if (pairs.length == 1) {
            const pair = pairs[0].Pair.Address
            const rugCheckResponse = await helpers.axiosGet(`https://api.honeypot.is/v2/IsHoneypot?address=${tokenAddress}&pair=${pair}&chainID=56`);

            if (rugCheckResponse) {
                // if (rugCheckResponse.IsHoneypot) {

                const creationTxnHash = rugCheckResponse.pair.creationTxHash
                const deployer = await pool.getPoolDeployer(creationTxnHash)

                if (deployer) {
                    console.log("deployer ", creationTxnHash, deployer)
                } else {
                    console.log("no deployer found")
                }


                // const poolData: IPool = {
                //     poolAddress: rugCheckResponse.pair.Pair.address,
                //     token: rugCheckResponse.token.address,
                //     pairToken: rugCheckResponse.withToken.address,
                //     honeyPot: rugCheckResponse.honeypotResult.IsHoneypot,
                //     holders: rugCheckResponse.holderAnalysis.holders,
                //     routerAddress: rugCheckResponse.router,
                //     creationTxn: rugCheckResponse.pair.creationTxHash,
                //     createdAt: rugCheckResponse.pair.createdAtTimestamp;
                //     deployer: string;
                //     liquiditySupplier: string;
                //     liquidityRemover: string;

                // }
                // } else {
                //     console.log("no rug found")
                // }


            } else {
                console.log("token has multiple pairs")
            }
            // } else {
            //     console.log("token has multiple pairs ")
            //     console.log(pairs)
            // }

        }
    }

    getTokenPairs = async (tokenAddress: string) => {
        const pairs = await helpers.axiosGet(`https://api.honeypot.is/v1/GetPairs?address=${tokenAddress}&chainID=56`);
        return pairs;
    }
}

export const rug = new Rug();