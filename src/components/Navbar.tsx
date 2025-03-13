
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      isScrolled 
        ? "py-3 bg-white/80 dark:bg-black/80 backdrop-blur shadow-sm" 
        : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-medium text-lg hidden sm:inline-block">Speedy Servers</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-sm font-medium hover:text-primary transition-colors">
              特徴
            </Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
              料金プラン
            </Link>
            <Link to="/support" className="text-sm font-medium hover:text-primary transition-colors">
              サポート
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              ブログ
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">ログイン</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/signup">無料で始める</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-background/95 backdrop-blur z-40 transform transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="pt-20 px-6 flex flex-col h-full">
          <nav className="flex flex-col space-y-6 text-center">
            <Link 
              to="/features" 
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              特徴
            </Link>
            <Link 
              to="/pricing" 
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              料金プラン
            </Link>
            <Link 
              to="/support" 
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              サポート
            </Link>
            <Link 
              to="/blog" 
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ブログ
            </Link>
            
            <div className="pt-6 flex flex-col space-y-4">
              <Button variant="outline" asChild>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  ログイン
                </Link>
              </Button>
              <Button asChild>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  無料で始める
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
