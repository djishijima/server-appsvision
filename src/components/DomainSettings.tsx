
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Check, Globe } from "lucide-react";

const domainFormSchema = z.object({
  domainName: z.string().min(4, {
    message: "ドメイン名は最低4文字以上必要です。",
  }).regex(/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/, {
    message: "有効なドメイン形式で入力してください（例：example.com）",
  }),
});

const DomainSettings = () => {
  const [open, setOpen] = useState(false);
  const [domainAdded, setDomainAdded] = useState(false);
  
  const form = useForm<z.infer<typeof domainFormSchema>>({
    resolver: zodResolver(domainFormSchema),
    defaultValues: {
      domainName: "",
    },
  });

  function onSubmit(values: z.infer<typeof domainFormSchema>) {
    console.log(values);
    setDomainAdded(true);
    setTimeout(() => setOpen(false), 1500);
  }

  return (
    <section id="domain-settings" className="py-20 md:py-28">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            簡単<span className="text-primary">ドメイン設定</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            独自ドメインを簡単に設定し、プロフェッショナルなウェブサイトを構築
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">独自ドメインで<span className="text-primary">ブランド価値</span>を高めましょう</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>独自ドメインを使用することで、ビジネスの信頼性と専門性が向上します。お客様にとって覚えやすく、検索エンジンでの発見可能性も高まります。</p>
              <p>当社では、新規ドメイン取得から既存ドメインの移管まで、簡単な手順でサポートします。</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5 flex-shrink-0" />
                  <span>無料ドメイン取得サービス（年間契約プラン）</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5 flex-shrink-0" />
                  <span>ドメイン移管の無料サポート</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5 flex-shrink-0" />
                  <span>自動DNS設定</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-primary h-5 w-5 flex-shrink-0" />
                  <span>無料のSSL証明書</span>
                </li>
              </ul>
            </div>
            
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="mt-8 rounded-md px-8 py-6 text-lg">
                  <Globe className="mr-2 h-5 w-5" />
                  ドメイン設定を開始
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>ドメイン設定</DialogTitle>
                  <DialogDescription>
                    独自ドメインを入力して、サーバーに接続しましょう。
                  </DialogDescription>
                </DialogHeader>
                
                {domainAdded ? (
                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <p className="text-center font-medium">ドメインが正常に追加されました！</p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="domainName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ドメイン名</FormLabel>
                            <FormControl>
                              <Input placeholder="example.com" {...field} />
                            </FormControl>
                            <FormDescription>
                              既存のドメインまたは新しく取得したドメインを入力してください。
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full">設定を保存</Button>
                    </form>
                  </Form>
                )}
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="glass-card rounded-xl p-8 shadow-lg animate-fade-in">
            <div className="bg-secondary/50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold mb-2">DNS設定例</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">タイプ</span>
                  <span className="font-medium">ホスト</span>
                  <span className="font-medium">値</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>A</span>
                  <span>@</span>
                  <span>203.0.113.1</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>CNAME</span>
                  <span>www</span>
                  <span>@</span>
                </div>
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>MX</span>
                  <span>@</span>
                  <span>mail.speedy-servers.jp</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">サポートが必要ですか？</h4>
              <p className="text-muted-foreground">ドメイン設定に関するサポートが必要な場合は、当社の専門スタッフがお手伝いします。24時間365日のサポートで、いつでもご相談いただけます。</p>
              <Button variant="outline" className="w-full">
                サポートに連絡する
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSettings;
