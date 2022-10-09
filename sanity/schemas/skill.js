export default {
  name: "skill",
  title: "skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "progress",
      title: "progress",
      type: "number",
      validation: (rule) => rule.min(0).max(100),
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
