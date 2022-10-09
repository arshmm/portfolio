export default {
  name: "experience",
  title: "experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "jobTitle",
      type: "string",
    },
    {
      name: "companyName",
      title: "companyName",
      type: "string",
    },
    {
      name: "comapanyImage",
      title: "comapanyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "dateStarted",
      title: "dateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      title: "dateEnded",
      type: "date",
    },
    {
      name: "isCurrentlyWorkingThere",
      title: "isCurrentlyWorkingThere",
      type: "boolean",
    },
    {
      name: "technilogies",
      title: "technilogies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
