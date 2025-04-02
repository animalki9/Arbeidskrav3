export default {
  name: 'workLog',
  title: 'Arbeidslogg',
  type: 'document',
  fields: [
    {
      name: 'dato',
      title: 'Dato',
      type: 'date'
    },
    {
      name: 'person',
      title: 'Person',
      type: 'reference',
      to: [{ type: 'person' }] // 👈 Dette må matche name: 'person' i member.js
    },
    {
      name: 'oppgave',
      title: 'Oppgave',
      type: 'string'
    },
    {
      name: 'timer',
      title: 'Timer',
      type: 'number'
    }
  ]
}
