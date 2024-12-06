import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom"; // 'Router'를 사용하지 않고 'Route'와 'Routes'만 가져옴
import { UserProvider } from "./context/UserContext"; // UserProvider 올바르게 import
import Header from "./components/Header";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import ProfileEdit from "./routes/ProfileEdit";
import Challenge from "./routes/Challenge";
import BoardRoutes from "./routes/BoardRoutes"; // 게시판 관련 경로
import ErrorGame from "./routes/ErrorGame";
import RankingPage from "./routes/RankingPage";
import TypeTest from "./routes/TypeTest";
import PromotionPage from "./routes/PromotionPage";
import NotFound from "./routes/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      {" "}
      {/* 전체 레이아웃 */}
      <UserProvider>
        <Header />
        <div className="content">
          {" "}
          {/* 메인 컨텐츠 영역 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/board/*" element={<BoardRoutes />} />
            <Route path="/findError" element={<ErrorGame />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/typetest" element={<TypeTest />} />
            <Route path="/promotion" element={<PromotionPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
