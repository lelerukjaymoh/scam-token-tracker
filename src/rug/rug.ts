import { helpers } from "../utils/helpers";

class Rug {
    checkRugStatus = async (tokenAddress: string) => {
        const pairs = await this.getTokenPairs(tokenAddress)

        if (pairs) {
            if (pairs.length == 1) {
                const pair = pairs[0].Pair.Address

                console.log("pair address ", pair)
                const rugCheckResponse = await helpers.axiosGet(`https://api.honeypot.is/v2/IsHoneypot?address=${tokenAddress}&pair=${pair}&chainID=56`);
                console.log("rug response ", rugCheckResponse)
            } else {
                console.log("token has multiple pairs")
            }
        }

    }

    getTokenPairs = async (tokenAddress: string) => {
        const pairs = await helpers.axiosGet(`https://api.honeypot.is/v1/GetPairs?address=${tokenAddress}&chainID=56`);
        return pairs;
    }
}

export const rug = new Rug();