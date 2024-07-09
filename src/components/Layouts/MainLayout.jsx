import HomeHeader from "./Headers/HomeHeader";

const MainLayout = ({ isHomePage, children }) => {
  if (isHomePage)
    return (
      <>
        <HomeHeader />
        {children}
      </>
    );
};

export default MainLayout;
