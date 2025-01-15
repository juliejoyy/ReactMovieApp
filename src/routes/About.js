import React from "react";

function About() {
  return (
    <div style={{
      padding: "40px",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>👤 About Me</h1>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        안녕하세요! 저는 현재 한국외국어대학교 GBT학부 재학중인 임세민입니다. <br/>
        이 웹사이트는 제가 처음 react로 개발한 웹이에요!
      </p>
      <h2 style={{ fontSize: "1.5rem", marginTop: "30px" }}>✨ 취미 & 관심사</h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", lineHeight: "1.6" }}>
        <li>👩🏻‍💻 NLP, ComputerVision(object detection, Classification), 
            <br/>FrontEnd, UX.UI</li>
        <li>🍞 빵</li>
        <li>📚 독서</li>
        <li>🏃🏻‍♀️‍➡️ 러닝</li>
      </ul>
      <h2 style={{ fontSize: "1.5rem", marginTop: "30px" }}>📧</h2>
      <p style={{ fontSize: "1.1rem" }}>이메일: semin021126@gmail.com</p>
    </div>
  );
}

export default About;
