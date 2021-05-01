// const path = require('path');

// const getPage = (filename) => {
//   return require.resolve( path.join(__dirname, `/src/pages/${filename}`) );
// }

// exports.createPages = async ({ graphql, actions }) => {

//   const { createPage } = actions;

//   createPage({ 
//     path: "/", 
//     component: getPage("Project.jsx")
//   })

//   // createPage({ path: "/creators/", component: getPage("CreatorGrid.jsx") })
//   // createPage({ path: "/playlists/", component: getPage("PlaylistGrid.jsx") })
//   // createPage({ path: "/zine/", component: getPage("Zine.jsx") })
  
//   // const allSanityProject = await graphql(`
//   //   query {
//   //     allSanityProject {
//   //       nodes {
//   //         slug {
//   //           current
//   //         }
//   //       }
//   //     }
//   //   }
//   // `)

//   // allSanityProject.data.allSanityProject.nodes.forEach( node => {

//   //   console.log(node.slug.current)

//   //   createPage({
//   //     path: `/project/${node.slug.current}/`,
//   //     component: require.resolve("./src/templates/Project.jsx"),
//   //     // context: { slug: node.slug.current }
//   //   });
//   // });

// }