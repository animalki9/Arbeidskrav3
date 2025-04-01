// schemas/header.js
export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
      {
        name: 'groupName',
        title: 'Group Name',
        type: 'string'
      },
      {
        name: 'groupNumber',
        title: 'Group Number',
        type: 'string'
      },
      {
        name: 'members',
        title: 'Group Members',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'person' }]  // Assuming 'person' schema contains member profiles
          }
        ]
      }
    ]
  };
  