// import React from 'react'

import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      about
    </>
  );
}

export default About;
