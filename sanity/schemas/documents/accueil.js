export default {
  name: 'accueil',
  title: "Page d'accueil",
  type: 'document',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
    },
    {
      name: 'bestProducts',
      title: 'Produits',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      title: 'Titre',
      name: 'secondTitle',
      type: 'string',
    },
    {
      name: 'typeProducts',
      title: 'Produits',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    },
    {
      name: 'contentBody',
      title: 'Content',
      type: 'blockContent'
    },
  ],
};
