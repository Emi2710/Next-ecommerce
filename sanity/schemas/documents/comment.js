export default {
    name: 'comment',
    title: 'Commentaires et avis',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Nom',
        type: 'string',
      },
      {
        name: 'approved',
        title: 'Approuvé',
        type: 'boolean',
        description: "Les commentaires ne seront pas affichés s'ils ne sont pas approuvés!"
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Note sur 5',
        type: 'number',
      },
      {
        name: 'comment',
        title: 'Commentaire',
        type: 'text',
      },
      {
        name: 'product',
        type: 'reference',
        to: [{type: "product"}],
      },
    ],
    preview: {
    select: {
      name: 'name',
      comment: 'comment',
      product: 'product.name',
    },
    prepare({ name, comment, product }) {
      return {
        title: `${name} on ${product}`,
        subtitle: comment,
      }
    },
  },
  }
  