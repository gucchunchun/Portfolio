export default {
  index: {
    hero: {
      subtitle:
        "私は1年の経験を持つWebエンジニアです。Webアプリケーションの構築と最適化に取り組んでいます。現在、スキルを向上させ、Web開発のさまざまな分野で知識を広げる方法を模索しています。",
    },
    about: {
      content: {
        intro: "こんにちは、日本でWeb開発を行っている友菜です。",
        paragraphs: [
          "私はバックエンドとフロントエンドの両方に強い基盤を持つWebシステムエンジニアとして働いています。",
          "PHP、TypeScript、JavaScriptなどの技術を活用し、Webアプリケーションを開発してきました。",
          "現在、React Nativeを学びながらモバイルアプリ開発にも挑戦し、シームレスなユーザーエクスペリエンスを提供するためにスキルを磨いています。",
        ],
      },
    },
    work: {
      content: {
        experiences: [
          {
            title: "ジュニアWeb開発者",
            place: "株式会社 Buzzestry",
            description: [
              "SESエンジニアとして勤務。",
              "バックエンドおよびフロントエンドのソリューションを実装し、スムーズなユーザー体験を実現しました。",
              "また、技術的な業務に加えて、海外展開を支援するブリッジSEとして会議の翻訳や調整業務も担当しました。",
            ],
            year: {
              "from": 2024
            }
          },
        ],
      },
    },
    education: {
      content: {
        intro: "こんにちは、私はユナです。日本のWeb開発者です。",
        experiences: [
          {
            title: "独学でWeb開発を学習",
            description: [
              "オンラインコースやハンズオンプロジェクトを通じて、Web開発の包括的な知識を習得。",
            ],
            year: {
              "from": 2023
            }
          },
          {
            title: "早稲田大学 英文学科",
            description: [
              "イギリス文学を専攻。",
              "さらに、Pythonを活用した統計学やJavaScriptを用いたプログラミングの講義を受講し、プログラミングへの関心を深めました。"
            ],
            year: {
              "from": 2019,
              "to": 2023
            }
          }
        ],
      },
    },
    project: {
    },    
  }

} as const;
