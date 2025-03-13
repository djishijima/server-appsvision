
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/70 py-12 md:py-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-medium text-lg">Speedy Servers</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              WordPressに最適化された高速・安全なレンタルサーバー。Pleskで簡単管理。
            </p>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">サービス</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/wordpress-hosting" className="hover:text-primary transition-colors">
                  WordPress専用ホスティング
                </Link>
              </li>
              <li>
                <Link to="/domain" className="hover:text-primary transition-colors">
                  ドメイン取得
                </Link>
              </li>
              <li>
                <Link to="/ssl" className="hover:text-primary transition-colors">
                  SSL証明書
                </Link>
              </li>
              <li>
                <Link to="/backup" className="hover:text-primary transition-colors">
                  バックアップサービス
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">会社情報</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">サポート</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link to="/knowledge-base" className="hover:text-primary transition-colors">
                  ナレッジベース
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary transition-colors">
                  ブログ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Speedy Servers. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Twitter
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Facebook
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              Instagram
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
