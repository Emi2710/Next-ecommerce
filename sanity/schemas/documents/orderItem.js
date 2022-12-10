export default {
  title: 'Articles de la commande',
  name: 'orderItem',
  type: 'object',
  fields: [
    {
      title: 'Nom',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Quantité',
      name: 'quantity',
      type: 'number',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Prix',
      name: 'price',
      type: 'number',
    },
  ],
};
