const path = require('path');

const getComponent = (_path) => {
  return require.resolve( path.join(__dirname, _path) );
}

exports.createPages = async ({ actions }) => {

  const { createPage } = actions;

  createPage({ 
    path: "/", 
    component: getComponent(`/src/pages/Index/index.jsx`)
  })

}