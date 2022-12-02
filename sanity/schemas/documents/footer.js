export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      title: 'Titre',
      name: 'title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
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
  ],
};
