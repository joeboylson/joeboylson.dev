const path = require('path');

const getComponent = (_path) => {
  return require.resolve( path.join(__dirname, _path) );
}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  createPage({ 
    path: "/", 
    component: getComponent(`/src/pages/Home/index.jsx`)
  })
  
  const allSanityProject = await graphql(`
    query {
      allSanityProject {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)

  allSanityProject.data.allSanityProject.nodes.forEach( node => {
    const slug = node.slug.current;
    createPage({
      path: `/project/${slug}/`,
      component: getComponent(`/src/templates/Project/index.jsx`),
      context: { slug }
    });
  });

}