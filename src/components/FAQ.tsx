
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "WordPressサイトの移行は簡単にできますか？",
    answer: "はい、簡単に移行できます。当社の管理パネルから移行ツールを使用するか、無料の移行サービスをご利用いただけます。専門スタッフが移行のサポートを行いますので、お気軽にご相談ください。"
  },
  {
    question: "サーバーの稼働率はどのくらいですか？",
    answer: "当社のサーバーは99.9%の稼働率を保証しています。定期的なメンテナンスや監視システムにより、安定したサービスを提供しています。万が一の障害時も、迅速に対応いたします。"
  },
  {
    question: "初期費用はかかりますか？",
    answer: "いいえ、初期費用は一切かかりません。月額または年額の料金プランのみで、すべてのサービスをご利用いただけます。年間契約の場合は、10%の割引が適用されます。"
  },
  {
    question: "サポートはどのように受けられますか？",
    answer: "メール、チャット、電話の3つの方法でサポートを受けることができます。スタンダードプランは平日9時〜18時、ビジネスプランは365日9時〜21時、プレミアムプランは24時間365日のサポートを提供しています。"
  },
  {
    question: "サーバーのバックアップはどのように行われますか？",
    answer: "プランによって異なりますが、自動バックアップを定期的に実施しています。スタンダードプランは週1回、ビジネスプランとプレミアムプランは毎日バックアップを行います。また、手動でいつでもバックアップを取ることも可能です。"
  },
  {
    question: "SSL証明書は無料で提供されますか？",
    answer: "はい、すべてのプランでLet's Encryptの無料SSL証明書を提供しています。管理パネルから簡単に設定でき、サイトのセキュリティと検索エンジン評価の向上に役立ちます。"
  },
  {
    question: "契約期間の縛りはありますか？",
    answer: "最低契約期間は設けておりません。月額プランは1ヶ月単位、年額プランは12ヶ月単位でのご契約となります。いつでも解約可能ですが、年額プランの場合は残りの期間の返金はございません。"
  },
  {
    question: "プランの変更は可能ですか？",
    answer: "はい、いつでもプランのアップグレードが可能です。アップグレードの場合は即時反映され、差額のみのお支払いとなります。ダウングレードは次回の更新時に反映されます。"
  }
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            よくある<span className="text-primary">ご質問</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            お客様からよくいただくご質問とその回答をまとめました
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-lg font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
