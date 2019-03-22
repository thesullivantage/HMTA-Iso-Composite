import Demo from "./pages/demo";
import Root from "./iso/Root";
const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Demo 
      }
    ]
  }
];

export default routes;
