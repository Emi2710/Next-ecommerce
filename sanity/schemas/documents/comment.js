export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'approved',
        title: 'Approved',
        type: 'boolean',
        description: 'Comments will not be shown without approved!'
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'comment',
        title: 'Comment',
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
  