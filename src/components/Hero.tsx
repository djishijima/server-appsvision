
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl opacity-60"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in">
            <div className="inline-flex items-center justify-center rounded-full border border-border bg-background/50 backdrop-blur px-3 py-1 text-sm font-medium text-muted-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              WordPress専用サーバー
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance mb-6 animate-fade-in">
            <span className="block">
              早くて、安くて、安心な
            </span>
            <span className="relative inline-block animate-fade-in animate-delay-100">
              <span className="text-primary relative z-10">プレミアムサーバー</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 rounded-full -z-10 transform translate-y-1"></span>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground md:text-pretty max-w-2xl mx-auto mb-8 animate-fade-in animate-delay-200">
            Pleskで簡単管理、WordPressに最適化された高速レンタルサーバー。充実したセキュリティと信頼性で、あなたのビジネスを強力にサポートします。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in animate-delay-300">
            <Button size="lg" className="rounded-md px-8 py-6 text-lg group shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
              <Link to="/signup">
                無料トライアル開始
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-md px-8 py-6 text-lg border-2 hover:bg-primary/5 transition-colors" asChild>
              <Link to="/pricing">料金プランを見る</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in animate-delay-400">
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl transition-all hover:bg-primary/5 hover:scale-105">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-md shadow-primary/10">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-medium">超高速</h3>
              <p className="text-sm text-muted-foreground">最新SSDとKUSANAGI技術で高速表示</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl transition-all hover:bg-primary/5 hover:scale-105">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-md shadow-primary/10">
                <Server size={24} />
              </div>
              <h3 className="text-lg font-medium">リーズナブル</h3>
              <p className="text-sm text-muted-foreground">初期費用無料、コスパの高い料金プラン</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-2 p-4 rounded-xl transition-all hover:bg-primary/5 hover:scale-105">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2 shadow-md shadow-primary/10">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-medium">安心セキュリティ</h3>
              <p className="text-sm text-muted-foreground">自動バックアップとWAF完備</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
