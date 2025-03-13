
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl opacity-60"></div>
      </div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center shadow-xl animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            ビジネスの成長を加速させる<span className="text-primary">最適なサーバー</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            今なら30日間無料トライアル実施中。初期費用無料、いつでもキャンセル可能です。
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-md px-8 py-6 text-lg group" asChild>
              <Link to="/signup">
                無料トライアル開始
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-md px-8 py-6 text-lg" asChild>
              <Link to="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
