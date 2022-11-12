export default {
  name: 'sousCategorie',
  title: 'Sous catégories',
  type: 'document',
  fields: [
    {
        name: 'categoryName', 
        title: 'Nom de la sous catégorie',
        type: 'string'
    },
    {
      name: 'parentCategory',
      title: 'Catégorie Parent',
      type: 'reference',
      to: [{type: 'category'}],
      
    },
  ],
  preview: {
    select: {
      title: 'categoryName',
      subtitle: 'parentCategory.categoryName',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle: subtitle ? `– ${subtitle}` : ``,
    }),
  },
  
}