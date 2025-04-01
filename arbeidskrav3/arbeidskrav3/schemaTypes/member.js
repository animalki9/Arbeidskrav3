export default {
  name: 'member',
  type: 'document',
  title: 'Group Members',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'email', type: 'string', title: 'Email' },
    { 
      name: 'image', 
      type: 'image', 
      title: 'Profile Picture', 
      options: { hotspot: true } 
    },
    { 
      name: 'slug', 
      type: 'slug', 
      title: 'Slug', 
      options: { source: 'name', maxLength: 200 } 
    }
  ]
}
