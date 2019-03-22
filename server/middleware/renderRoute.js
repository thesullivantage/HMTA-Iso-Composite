//import React from 'react';
const React = require('react')
//import fs from 'fs';
const fs = require('fs')
// import chalk from 'chalk';
const reactDomServer = require('react-dom/server')
// need render to string
// import { renderToString } from 'react-dom/server';
const rrDom = require('react-router-dom')
const StaticRouter = rrDom.StaticRouter
// need StaticRouter
// import { StaticRouter } from 'react-router-dom';
const rrConfig = require('react-router-config')
// import { matchRoutes } from 'react-router-config';
const rrRoutes = require('../../client/src/routes.js')
// needimport routes from '../../client/routes';

const App = require('../../client/routes')
// import App from '../../client/routes';


// pkgs for experimentation
const util = require('util');

// 

const renderRoute = function (req, res) {
  const branch = rrConfig.matchRoutes(rrRoutes, req.url);
  const promises = [];

  // do a map here instead, refer to 
  branch.forEach(({ route, match }) => {
    if (route.loadData) {
      promises.push(route.loadData(match));
    }
  });

  // const guy = branch[0]

  Promise.all(promises).then(data => {
    // data will be an array[] of datas returned by each promises.
    const context = data.reduce((context, data) => Object.assign(context, data), {});   
    // console.log('what are you ', util.inspect(context, { showHidden: true, depth: null }));

    const router = <StaticRouter location={req.url} context={context}><App /></StaticRouter>;

    
    const app = reactDomServer.renderToString(router);

    //START HERE
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
    
    //const html = renderToString(<HTML html={app} />);

    // console.log(chalk.green(`<!DOCTYPE html>${html}`));

    //return res.send(`<!DOCTYPE html>${html}`);
  });
}

module.exports = renderRoute;
