const path = require('path');
const { graphqlAllSanityProject } = require('./src/graphql/allSanityProject');

const getComponent = (_path) => {
  return require.resolve( path.join(__dirname, _path) );
}

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  ["/", "/home"].forEach(path => 
    createPage({path, component: getComponent(`/src/pages/Index/index.jsx`)})
  )

  createPage({ 
    path: "/projects", 
    component: getComponent(`/src/pages/Projects/index.jsx`)
  })

  createPage({ 
    path: "/gallery", 
    component: getComponent(`/src/pages/Gallery/index.jsx`)
  })

  const allSanityProject = await graphql(graphqlAllSanityProject);
  allSanityProject.data.allSanityProject.nodes.forEach(node => {
    createPage({
      path: `/projects/${node.slug.current}/`,
      component: require.resolve("./src/components/ProjectTemplate/index.jsx"),
      context: { id: node.id }
    });
  });

}