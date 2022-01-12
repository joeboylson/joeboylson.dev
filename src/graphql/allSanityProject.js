module.exports = {
  graphqlAllSanityProject: `
    query {
      allSanityProject {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `
};