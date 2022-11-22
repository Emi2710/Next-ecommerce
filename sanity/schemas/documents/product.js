export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: "currency",
      title: "Currency",
      description: "Keep this 'usd' for the purposes of this tutorial",
      type: "string",
    },
    {
      name: 'image',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
         hotspot: true,  
      }
    },
    {
      name: 'contentBody',
      title: 'Content',
      type: 'blockContent'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input) =>
          input
            .toLowerCase()
            //Remove spaces
            .replace(/\s+/g, "-")
            //Remove special characters
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      title: 'Catégories',
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Roues', value: 'Roues'},
          {title: 'Pièces de rechange', value: 'Pièces de rechange'},
          {title: 'Accessoires', value: 'Accessoires'},
          {title: 'Consommables', value: 'Consommables'},
        ], 
        layout: 'radio' // <-- defaults to 'dropdown'
              }
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },

    {
      name: 'numReviews',
      title: 'NumReviews',
      type: 'number',
    },
    {
      name: 'countInStock',
      title: 'CountInStock',
      type: 'number',
    },
    
  ],
  initialValue: {
    currency: "eur",
  },

};
