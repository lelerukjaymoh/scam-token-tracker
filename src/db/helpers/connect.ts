import mongoose from "mongoose";
import { CONSTANTS } from "../../config/constants";

mongoose.set('strictQuery', false);

const connector = async (URI: any) => {
    try {
        await mongoose.connect(URI);

        // waiting for connection to be established before continuing
        await new Promise((resolve) => {
            mongoose.connection.on("open", resolve);
        });
    } catch (error: any) {
        console.log(error);
    }
};
export default connector(CONSTANTS.DB_URI)
