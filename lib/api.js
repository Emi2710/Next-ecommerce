import client, {previewClient} from '../utils/client';

const getClient = (preview) => (preview ? previewClient : client)

const getUniqueProduct = (products) => {
  const slugs = new Set()
  return products.filter((product) => {
    if (slugs.has(product.slug)) {
      return false
    } else {
      slugs.add(product.slug)
      return true
    }
  })
}

const productFields = `
  _id,
  name,
  'slug': slug.current,
  
`

export async function getProductAndMoreProducts(slug, preview) {
  const curClient = getClient(preview)
  const [product, moreProducts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "product" && slug.current == $slug] | order(_updatedAt desc) {
        ${productFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      product._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "product" && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${productFields}
        body,
      }[0...2]`,
      { slug }
    ),
  ])
  return { product, moreProducts: getUniqueProduct(moreProducts) }
}

export async function getAllProductsWithSlug() {
  const data = await client.fetch(`*[_type == "product"]{ 'slug': slug.current }`)
  return data
}