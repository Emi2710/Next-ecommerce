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
      title: 'Roues: sous catégories',
      name: 'rouesSubCategory',
      type: 'string',
      options: {
        list: [
          {title: 'Appareil photo', value: 'Appareil Photo'},
          {title: 'Pneus', value: 'Pneus'},
          {title: 'Roues pleines', value: 'Roues pleines'},
          
        ], 
              },

    },
    {
      title: 'Pièces de rechange: sous catégories',
      name: 'piecesSubCategory',
      type: 'string',
      options: {
        list: [
          {title: 'Batteries & chargeurs', value: 'Batteries & chargeurs'},
          {title: 'Electronique', value: 'Electronique'},
          {title: 'Moteur', value: 'Moteur'},
          {title: 'Adresse', value: 'Adresse'},
          {title: 'Moulure', value: 'Moulure'},
          {title: 'Matériels', value: 'Matériels'},
          {title: 'Freins', value: 'Freins'},
          {title: 'Châssis', value: 'Châssis'},
          {title: 'Personnalisation', value: 'Personnalisation'},
          {title: 'Eclair', value: 'Eclair'},
          {title: 'Suspensions', value: 'Suspensions'},
          
        ], 
              },

    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'countInStock',
      title: 'CountInStock',
      type: 'number',
    },
    {
      name: 'related',
      title: 'Suggestions',
      type: 'string',
    },
    {
      name: 'productsRelated',
      title: 'Produits en suggestion',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    
  ],
  

};
