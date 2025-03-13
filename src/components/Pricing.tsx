
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type PricingPeriod = "monthly" | "yearly";

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  storage: string;
  domains: string;
  bandwidth: string;
  features: string[];
  highlighted?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "スタンダード",
    description: "個人ブログや小規模サイトに最適",
    price: {
      monthly: 990,
      yearly: 890,
    },
    storage: "200GB SSD",
    domains: "3サイト",
    bandwidth: "無制限",
    features: [
      "Plesk管理パネル",
      "WordPress簡単インストール",
      "無料SSL証明書",
      "自動バックアップ（週1回）",
      "基本セキュリティ対策"
    ]
  },
  {
    name: "ビジネス",
    description: "中小企業や成長中のサイトに最適",
    price: {
      monthly: 2490,
      yearly: 2190,
    },
    storage: "500GB SSD",
    domains: "10サイト",
    bandwidth: "無制限",
    features: [
      "Plesk管理パネル",
      "WordPress簡単インストール",
      "無料SSL証明書",
      "自動バックアップ（日次）",
      "高度なセキュリティ対策",
      "優先サポート",
      "CDN統合",
      "専用IPアドレス"
    ],
    highlighted: true
  },
  {
    name: "プレミアム",
    description: "大規模サイトやeコマース向け",
    price: {
      monthly: 4990,
      yearly: 4490,
    },
    storage: "1TB SSD",
    domains: "無制限",
    bandwidth: "無制限",
    features: [
      "Plesk管理パネル",
      "WordPress簡単インストール",
      "無料SSL証明書",
      "自動バックアップ（日次）",
      "最高レベルセキュリティ対策",
      "24時間365日VIPサポート",
      "CDN統合",
      "専用IPアドレス",
      "高性能サーバー割り当て",
      "専門家によるWordPress最適化"
    ]
  }
];

const Pricing = () => {
  const [period, setPeriod] = useState<PricingPeriod>("monthly");

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            シンプルでわかりやすい<span className="text-primary">料金プラン</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            初期費用無料、必要な機能がすべて揃ったプランをご用意しました
          </p>
          
          <div className="inline-flex items-center p-1 rounded-lg bg-secondary border">
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                period === "monthly" 
                  ? "bg-background shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setPeriod("monthly")}
            >
              月額
            </button>
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-all",
                period === "yearly" 
                  ? "bg-background shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setPeriod("yearly")}
            >
              年額 <span className="text-xs text-primary font-semibold">（10%オフ）</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-xl border overflow-hidden flex flex-col transition-all duration-300 animate-fade-in",
                plan.highlighted 
                  ? "shadow-lg border-primary relative" 
                  : "shadow-sm hover:shadow-md",
                `animate-delay-${(index % 3 + 1) * 100}`
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
              )}
              
              <div className="p-6 bg-card">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">¥{period === "monthly" ? plan.price.monthly.toLocaleString() : plan.price.yearly.toLocaleString()}</span>
                  <span className="text-muted-foreground ml-2">/ 月</span>
                </div>
                
                <Button 
                  className={cn(
                    "w-full", 
                    plan.highlighted ? "" : "bg-secondary/80 text-foreground hover:bg-secondary/90"
                  )} 
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  今すぐ始める
                </Button>
              </div>
              
              <div className="p-6 flex-1 bg-card/50">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-x-2 gap-y-3 text-sm">
                    <div>
                      <span className="font-medium">ストレージ</span>
                      <p className="text-muted-foreground">{plan.storage}</p>
                    </div>
                    <div>
                      <span className="font-medium">ドメイン</span>
                      <p className="text-muted-foreground">{plan.domains}</p>
                    </div>
                    <div>
                      <span className="font-medium">転送量</span>
                      <p className="text-muted-foreground">{plan.bandwidth}</p>
                    </div>
                    <div>
                      <span className="font-medium">初期費用</span>
                      <p className="text-muted-foreground">無料</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="font-medium text-sm mb-3">含まれる機能</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="h-4 w-4 mr-2 text-green-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
