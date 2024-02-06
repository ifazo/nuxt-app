import { ObjectId } from "mongodb";
import { db } from "~/db";

export default defineEventHandler(async (event) => {
    
    const { id } = event.context.params as { id: string };

    const product = await db.products.findOne({ _id: new ObjectId(id) });

    return product;
})
