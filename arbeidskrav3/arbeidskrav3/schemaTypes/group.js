export default {
  name: "group",
  title: "Gruppe",
  type: "document",
  fields: [
    {
      name: "groupName",
      title: "Gruppenavn",
      type: "string",
    },
    {
      name: "members",
      title: "Medlemmer",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Navn", type: "string" },
            { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
            { name: "image", title: "Bilde", type: "image" },
          ],
        },
      ],
    },
    {
      name: "log",
      title: "Gruppelog",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "date", title: "Dato", type: "date" },
            { name: "entry", title: "Loggtekst", type: "text" },
          ],
        },
      ],
    },
  ],
};
