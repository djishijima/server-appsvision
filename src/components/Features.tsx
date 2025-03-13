
import React from 'react';
import { cn } from "@/lib/utils";
import { Clock, Shield, Zap, Server, Settings, LifeBuoy, Layers, Repeat } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "超高速SSDストレージ",
    description: "Ultra SSDを使用し、データアクセス速度を劇的に向上。ページ読み込み時間を最小限に抑えます。",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "最新のサーバーテクノロジー",
    description: "KUSANAGI技術を活用し、WordPressサイトの表示速度を最大化します。",
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Plesk管理パネル",
    description: "直感的なPleskコントロールパネルで、サーバー管理が簡単かつ効率的に行えます。",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "WordPress簡単インストール",
    description: "ワンクリックでWordPressをインストール。初心者でも簡単にサイト構築が可能です。",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "高度なセキュリティ対策",
    description: "ファイアウォール、WAF、無料SSL証明書を標準装備。安全なサイト運営を実現します。",
    color: "bg-red-500/10 text-red-500"
  },
  {
    icon: <Repeat className="h-6 w-6" />,
    title: "自動バックアップ",
    description: "定期的な自動バックアップでデータを保護。いつでも簡単に復元できます。",
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "99.9%の稼働時間保証",
    description: "信頼性の高いインフラストラクチャで、常に安定したサービスを提供します。",
    color: "bg-sky-500/10 text-sky-500"
  },
  {
    icon: <LifeBuoy className="h-6 w-6" />,
    title: "24時間365日サポート",
    description: "専門知識を持ったスタッフが24時間体制であらゆる問題に対応します。",
    color: "bg-teal-500/10 text-teal-500"
  }
];

const Features = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            WordPressに特化した<span className="text-primary">プレミアム機能</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ビジネスの成長を加速させる、充実した機能とサービスを提供します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in",
                `animate-delay-${(index % 4 + 1) * 100}`
              )}
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
