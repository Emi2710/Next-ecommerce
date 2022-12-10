export default {
  title: 'Shipping Address',
  name: 'shippingAddress',
  type: 'object',
  fields: [
    {
      title: 'Nom complet',
      name: 'fullName',
      type: 'string',
    },
    {
      title: 'Adresse',
      name: 'address',
      type: 'string',
    },
    {
      title: 'Ville',
      name: 'city',
      type: 'string',
    },
    {
      title: 'Code postale',
      name: 'postalCode',
      type: 'string',
    },
    {
      title: 'Pays',
      name: 'country',
      type: 'string',
    },
  ],
};
