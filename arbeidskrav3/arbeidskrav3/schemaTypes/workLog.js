export default {
  name: 'workLog',
  type: 'document',
  title: 'Work Log',
  fields: [
    { name: 'date', type: 'date', title: 'Date' },
    { 
      name: 'member', 
      type: 'reference', 
      title: 'Member', 
      to: [{ type: 'member' }] 
    },
    { name: 'task', type: 'string', title: 'Task Description' },
    { name: 'hours', type: 'string', title: 'Time Spent' }
  ]
}
