// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Galaxy Mentoring Network',
  siteDescription: 'Connecting Galaxy members (both new and existing) with Gmentors (Mentors within the Galaxy Community) in order to learn, improve proficiency and grow with Galaxy',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/blog/**/*.md',
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
          path: 'content/**/*.md',
          typeName: "Insert",
      },
  },
  ],
  templates: {
    Post: '/blog/:year/:month/:day/:id',
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: 'icon icon-link',
    }
  },
}
