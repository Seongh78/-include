import Main from "../pages/Main";
import NotFound from "../pages/NotFound";

// 라우터 등록
const AppRoutes = [
    {
      name: "Home",
      path: "/",
      exact: true,
      component: Main,
      props: {}
    },
    {
      name: "Main",
      path: "/main",
      exact: true,
      component: Main,
      props: {}
    },
    {
      name: "NotFound",
      path: "/",
      exact: false,
      component: NotFound,
      props: {}
    },
];

export default AppRoutes;