import MainLayout from "../components/Layouts/MainLayout";
import { HomePage } from "../pages";

const routesConfig = [
  {
    path: "/",
    index: true,
    element: (
      <MainLayout isHomePage={true}>
        <HomePage />
      </MainLayout>
    ),
  },
];

const privatePath = ["wallet", "admin", "profile", "portfolio"];

export default routesConfig;
export { privatePath };
