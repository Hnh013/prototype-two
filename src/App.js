import React, { useState } from 'react';
import { NavbarComponent, SidebarComponent, FooterComponent, DocComponent, HeaderComponent, LandingComponent, DemoComponent } from './components';



function App() {

  let [menuMain, setMenuMain] = useState(false);

  const handleClickMain = (argumentor) => {
    setMenuMain(argumentor);
  }

  return (
    <>
      <NavbarComponent menuNavbar={menuMain} handleClickNavbar={handleClickMain} />
      <SidebarComponent menuSidebar={menuMain} handleClickSidebar={handleClickMain} />
      <HeaderComponent />
      <LandingComponent />
      <DemoComponent />
      <DocComponent />
      <FooterComponent />
    </>
  )


}

export default App;
