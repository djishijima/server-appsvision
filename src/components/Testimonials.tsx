
import React from 'react';
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type Testimonial = {
  content: string;
  author: string;
  role: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    content: "WordPressサイトの表示速度が劇的に改善しました。以前は読み込みに時間がかかっていましたが、今ではほぼ瞬時に表示されます。顧客満足度も向上し、売上増加にも繋がっています。",
    author: "田中 誠",
    role: "ECサイト運営者",
    rating: 5
  },
  {
    content: "初心者でもとても使いやすいです。Plesk管理パネルが直感的で、わからないことがあってもサポートの方がすぐに対応してくれます。セキュリティ面も充実していて安心です。",
    author: "佐藤 美咲",
    role: "フリーランスデザイナー",
    rating: 5
  },
  {
    content: "多数のWordPressサイトを運用していますが、このサーバーに移行してから管理の手間が大幅に減りました。バックアップも自動で行われるので、もう心配する必要がありません。",
    author: "伊藤 健太",
    role: "ウェブ制作会社代表",
    rating: 4
  },
  {
    content: "コスパが非常に良いです。他社の同等サービスと比較しても機能が充実している割に価格が抑えられています。特にビジネスプランは中小企業にとって最適な選択です。",
    author: "山田 晶子",
    role: "中小企業経営者",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-secondary/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            お客様の<span className="text-primary">声</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            多くのお客様に選ばれている理由を、実際のユーザーの声からご紹介します
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-xl p-6 bg-card shadow-sm border transition-all duration-300 hover:shadow-md flex flex-col h-full animate-fade-in",
                `animate-delay-${(index % 4 + 1) * 100}`
              )}
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={cn(
                      "h-5 w-5", 
                      i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-muted"
                    )}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg flex-grow mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <footer className="mt-auto">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
