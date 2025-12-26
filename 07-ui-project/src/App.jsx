import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "",
      tag: "Satisfied",
      color: 'orange'
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661755121828-ca64b366b504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underserved",
      color: 'royalblue'
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661749996118-799eff98b27d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underbanked",
      color: 'aqua'
    },
    {
      img: "https://images.unsplash.com/photo-1766469284258-11bf4223e2af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      intro: "",
      tag: "Underanked",
      color: 'lightseagreen'
    },
    {
      img: "https://images.unsplash.com/photo-1634790711968-14f3a3322d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      intro: "",
      tag: "Underpranked",
      color: 'pink'
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
