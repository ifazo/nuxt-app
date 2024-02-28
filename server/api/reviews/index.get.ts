import prisma from "~/prisma";

export default defineEventHandler(async(event) => {
  const query = getQuery(event)

  const {id} = query as Review

  const reviews = await prisma.review.findMany({
    where: {
        productId: parseInt(id)
    }
  })

    return reviews
//   return { a: query.foo, b: query.baz }
})
