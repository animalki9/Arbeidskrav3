export default {
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'fornavn',
      title: 'Fornavn',
      type: 'string',
    },
    {
      name: 'etternavn',
      title: 'Etternavn',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'fornavn', maxLength: 96 },
    },
    {
      name: 'epost',
      title: 'E-post',
      type: 'string',
    },
    {
      name: 'bilde',
      title: 'Bilde',
      type: 'image',
    },
  ]
}
