import React, { useEffect } from "react";
import styled from "styled-components";

import ClientsPage from "../../pages/ClientsPage/ClientsPage";

const StyledApp = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

function App() {
  const onScroll = () => {
    const pos = window.pageYOffset;
    localStorage.setItem("scrollPosition", JSON.stringify(pos));
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <StyledApp>
      <ClientsPage />
    </StyledApp>
  );
}

export default App;
