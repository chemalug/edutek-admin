import Schools from "views/dashboard/admin/colegios/index.colegio";
import addSchool from "views/dashboard/admin/colegios/add.colegio";

var routes = [
  {
    path: "/schools",
    name: "Colegios",
    icon: "business",
    component: Schools,
    layout: "/dashboard",
    rol: "admin",
    show: true,
  },
  {
    path: "/schools/addSchool",
    name: "Colegios",
    icon: "business",
    component: addSchool,
    layout: "/dashboard",
    rol: "admin",
    show: false,
  },
];
export default routes;
