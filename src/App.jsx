import React from "react";
import Navbar from "./components/Navbar";
import WalletSection from "./components/WalletSection";
import QuickActions from "./components/QuickActions";
import CategoriesGrid from "./components/CategoriesGrid";
import RecentTransactions from "./components/RecentTransactions";
import BottomNav from "./components/BottomNav";
import "./App.css"; // Assuming you have a CSS file for global styles
export default function App() {
  return (
    <div className="mobile-container">
      <div className="app">
      <Navbar />
      <WalletSection />
      <QuickActions />
      <CategoriesGrid />
      <RecentTransactions />
      <BottomNav />
    </div>
    
    </div>
  );
}
