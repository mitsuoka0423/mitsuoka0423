type Process = "要件定義" | "設計" | "実装" | "テスト" | "運用" | "保守" | "その他";
type Role = "メンバー" | "プロジェクトリーダー" | "プロジェクトマネージャー";

type WorkExperience = {
  companyName: string,
  position: string,
  summary: {
    description: string,
    begin: Date,
    end: Date | null,
  },
  projects: {
    title: string,
    description: string,
    techStack: string[],
    begin: Date,
    end: Date | null,
    role: Role,
    processes: Process[],
  }[],
};

export const workExperience: WorkExperience[] = [
  {
    companyName: "東京海上日動システムズ株式会社",
    position: "システムエンジニア",
    summary: {
      description: "確定拠出年金LINE Botの開発を担当。Node.jsを用いたバックエンド開発、AWS Lambdaを用いたサーバーレスアーキテクチャの構築をスキルを習得。",
      begin: new Date("2016-04-01"),
      end: new Date("2020-03-31"),
    },
    projects: [
      {
        title: "Java基礎研修",
        description: "Javaを用いた保険システム開発に必要な技術を習得",
        techStack: ["Java", "Spring Framework", "MySQL", "HTML", "CSS", "JavaScript"],
        begin: new Date("2016-04-01"),
        end: new Date("2016-06-30"),
        role: "メンバー",
        processes: []
      },
      {
        title: "少量多品種保険商品の契約管理システムの開発/運用",
        description: " ",
        techStack: ["Java", "Spring Framework", "Vue.js"],
        begin: new Date("2016-07-01"),
        end: new Date("2017-03-31"),
        role: "メンバー",
        processes: ["設計", "実装", "テスト", "運用", "保守"]
      },
      {
        title: "確定拠出年金LINE Bot",
        description: "確定拠出年金の残高照会や運用情報の提供を行うLINE Botの開発",
        techStack: ["Node.js", "AWS Lambda", "DynamoDB", "LINE Messaging API"],
        begin: new Date("2018-04-01"),
        end: new Date("2019-03-31"),
        role: "メンバー",
        processes: ["実装", "テスト", "保守"]
      },
    ]
  },
  {
    companyName: "合同会社DMM.com",
    position: "Webアプリケーションエンジニア",
    summary: {
      description: "",
      begin: new Date("2020-04-01"),
      end: null,
    },
    projects: []
  },
];
