export default {
  name: 'user',
  title: 'Utilisateurs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Mot de passe',
      type: 'string',
    },
    {
      name: 'isAdmin',
      title: 'Admin ?',
      type: 'boolean',
    },
  ],
};
