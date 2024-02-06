import { db } from "~/db";
import { Product } from "~/types";

export default defineEventHandler(async (event) => {

    const query = getQuery(event);
    const { title, category } = query as Product;
    if (title) {
        const products = await db.products.find({ title: { $regex: title, $options: 'i' } }).toArray();
        return products;
    }
    else if (category) {
        const products = await db.products.find({ category: { $regex: category, $options: 'i' } }).toArray();
        return products;
    }
    const products = await db.products.find().toArray();
    return products;
})
