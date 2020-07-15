import Schools from "views/dashboard/admin/colegios/index.colegio";
import addSchool from "views/dashboard/admin/colegios/add.colegio";
import ProfesorPage from "views/dashboard/admin/profesores/index.profesor";
import addProfesor from "views/dashboard/admin/profesores/add.profesor";
import MenuDashboard from "views/dashboard/admin/menu.dashboard";

var routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: "business",
    component: MenuDashboard,
    layout: "/dashboard",
    rol: "admin",
    show: false,
  },
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
    name: "Agrear colegios",
    icon: "business",
    component: addSchool,
    layout: "/dashboard",
    rol: "admin",
    show: false,
  },
  {
    path: "/profesores",
    name: "Profesores",
    icon: "assignment_ind",
    component: ProfesorPage,
    layout: "/dashboard",
    rol: "admin",
    show: true,
  },
  {
    path: "/profesores/addProfesor",
    name: "Agregar profesor",
    icon: "assignment_ind",
    component: addProfesor,
    layout: "/dashboard",
    rol: "admin",
    show: false,
  },
  {
    path: "/asignacion",
    name: "Asignaciones",
    icon: "group_add",
    component: ProfesorPage,
    layout: "/dashboard",
    rol: "admin",
    show: true,
  },
];
export default routes;
