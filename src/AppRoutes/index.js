import Main from "../pages/Main";
import QuestionTimeline from "../pages/QuestionTimeline";
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
      name: "QuestionTimeline",
      path: "/timeline",
      exact: true,
      component: QuestionTimeline,
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