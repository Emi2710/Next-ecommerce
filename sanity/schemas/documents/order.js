export default {
  name: 'order',
  title: 'Commandes',
  type: 'document',
  fields: [
    {
      title: 'Utilisateur',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'userName',
      title: "Nom de l'utilisateur",
      type: 'string',
    },
    {
      name: 'itemsPrice',
      title: 'Prix de la commande',
      type: 'number',
    },
    {
      name: 'shippingPrice',
      title: 'Frais de livraison',
      type: 'number',
    },
    {
      name: 'totalPrice',
      title: 'Prix total',
      type: 'number',
    },
    {
      name: 'paymentMethod',
      title: 'Méthode de paiement',
      type: 'string',
    },
    {
      title: 'Adresse de livraison',
      name: 'shippingAddress',
      type: 'shippingAddress',
    },
    {
      title: 'Paiement',
      name: 'paymentResult',
      type: 'paymentResult',
    },
    {
      title: 'Articles de la commande',
      name: 'orderItems',
      type: 'array',
      of: [
        {
          title: 'Articles commandés',
          type: 'orderItem',
        },
      ],
    },
    {
      title: 'Payé ?',
      name: 'isPaid',
      type: 'boolean',
    },
    {
      title: 'Date de paiement',
      name: 'paidAt',
      type: 'datetime',
    },
    {
      title: 'Livré ?',
      name: 'isDelivered',
      type: 'boolean',
    },
    {
      title: 'Date de livraison',
      name: 'deliveredAt',
      type: 'datetime',
    },
    {
      title: 'Date de création de la commande',
      name: 'createdAt',
      type: 'datetime',
    },
  ],
};
