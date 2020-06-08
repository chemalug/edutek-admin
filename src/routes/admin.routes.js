import Schools from "views/dashboard/admin/colegios/index.colegio";

var routes = [
  {
    path: "/schools",
    name: "Colegios",
    icon: "business",
    component: Schools,
    layout: "/dashboard",
    rol: "admin",
    show: "true",
  },
];
export default routes;
