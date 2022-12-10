export default {
  name: 'product',
  title: 'Produits',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
    },
    {
      name: 'salePurcent',
      title: 'Pourcentage des soldes',
      type: 'string',
    },
    {
      name: 'onSalePrice',
      title: 'Ancien prix',
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
      title: 'Marque',
      name: 'brand',
      type: 'string',
      options: {
        list: [
          {title: 'Brigmton', value: 'Brigmton'},
          {title: 'Cecotec', value: 'Cecotec'},
          {title: 'Genérica', value: 'Genérica'},
          {title: 'Joyor', value: 'Joyor'},
          {title: 'Kaabo', value: 'Kaabo'},
          {title: 'Kugoo', value: 'Kugoo'},
          {title: 'Ninebot', value: 'Ninebot'},
          {title: 'Ovex', value: 'Ovex'},
          {title: 'SkateFlash', value: 'SkateFlash'},
          {title: 'Smartgyro', value: 'Smartgyro'},
          {title: 'Xiaomi', value: 'Xiaomi'},
          {title: 'Zero', value: 'Zero'},
          {title: 'Dualtron', value: 'Dualtron'},
          {title: 'Vsett', value: 'Vsett'},
          
        ], 
              },

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
      title: 'Note',
      type: 'number',
    },
    {
      name: 'countInStock',
      title: 'Quantité en stock',
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

  initialValue: {
    rating: 0
  } 

};
