import { Wallet, WebSocketProvider, JsonRpcProvider } from "ethers";
import { CONSTANTS } from "../config/constants";

const wsProvider = new WebSocketProvider(CONSTANTS.BSC_WS_URL!)
const httpProvider = new JsonRpcProvider(CONSTANTS.BSC_HTTP_URL!)

export const providerSigner = {
    wsProvider,
    httpProvider,
    // signer: new Wallet(process.env.PRIVATE_KEY!).connect(wsProvider)
}  