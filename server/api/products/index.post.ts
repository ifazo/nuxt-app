import { db } from "~/db";

export default defineEventHandler(async (event) => {

    const products = await db.products.insertOne(event);
    
    return products;
})
