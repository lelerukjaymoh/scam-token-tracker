export interface IPool {
    poolAddress: string;
    token: string;
    pairToken: string;
    honeyPot: boolean;
    holders: number;
    routerAddress: string;
    creationTxn: string;
    createdAt: number;
    deployer: string;
    liquiditySupplier: string;
    liquidityRemover: string;
}