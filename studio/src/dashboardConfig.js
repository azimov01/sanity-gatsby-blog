export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62b2372c49b52a37b4745f83",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-4gsknnn9",
                  apiId: "b4ebdd4b-4c87-4fc3-a289-359f01948edd",
                },
                {
                  buildHookId: "62b2372cd058fb3688b8ca82",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-p3z2ah2e",
                  apiId: "38bd7bac-265a-417c-a161-089e50b3cc79",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/azimov01/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-p3z2ah2e.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
