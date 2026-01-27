import type { Translations } from './zh'

export const ja: Translations = {
  // Navigation
  nav: {
    features: '機能',
    useCases: '活用例',
    platforms: 'プラットフォーム',
    download: 'ダウンロード',
    theme: 'テーマ',
  },

  // Hero Section
  hero: {
    badge: 'プロンプト不要のAIアシスタント',
    title: 'あなたのAIパートナー',
    titleHighlight: 'すべてを見て、先を考える',
    subtitle: 'プロンプト入力不要。Hawkeyeがあなたの作業を理解し、次のアクションを提案します。',
    cta: {
      download: '無料ダウンロード',
      github: 'GitHub',
    },
    stats: {
      users: 'アクティブユーザー',
      stars: 'GitHub Stars',
      privacy: '100%ローカル処理',
    },
  },

  // Features Section
  features: {
    title: 'AI体験を再定義',
    subtitle: 'プロンプト入力はもう不要。AIがあなたのために働きます。',
    items: {
      sees: {
        title: 'Sees Everything',
        titleZh: 'マルチモーダル認識',
        description: '画面、クリップボード、ファイル変更を包括的に認識します。',
      },
      thinks: {
        title: 'Thinks Ahead',
        titleZh: 'プロアクティブ推論',
        description: 'プロンプト不要で意図を理解し、次のアクションを提案。',
      },
      private: {
        title: 'Stays Private',
        titleZh: 'プライバシー優先',
        description: '100%ローカル処理。データはデバイスから出ません。オフラインで動作。',
      },
    },
  },

  // Use Cases Section
  useCases: {
    title: 'オールインワンの作業パートナー',
    subtitle: '何をしていても、Hawkeyeが理解してサポートします。',
    items: {
      diagnosis: {
        title: 'エラー診断',
        description: 'エラーを検出し、解決策を提案。',
      },
      docs: {
        title: 'スマートファイル整理',
        description: 'タイプと日付でダウンロードを自動整理。',
      },
      clipboard: {
        title: 'クリップボード強化',
        description: 'コピー内容を理解し、アクションを提案。',
      },
      project: {
        title: 'プロジェクト追跡',
        description: '変更を監視し、レポートを生成。',
      },
      email: {
        title: 'メールアシスタント',
        description: 'メールを分析し、返信とToDoを提案。',
      },
      web: {
        title: 'ウェブ情報抽出',
        description: '重要情報を識別し、保存を提案。',
      },
    },
    popular: '人気',
  },

  // Platforms Section
  platforms: {
    title: 'マルチプラットフォーム対応',
    subtitle: 'お気に入りのデバイスでHawkeyeをご利用ください。',
    items: {
      macos: {
        title: 'macOS',
        description: 'Apple Siliconに最適化されたネイティブSwiftアプリ。',
        status: '近日公開',
      },
      windows: {
        title: 'Windows',
        description: 'Windows 10/11対応のネイティブアプリ。',
        status: '開発中',
      },
      chrome: {
        title: 'Chrome拡張機能',
        description: 'スマートなウェブ認識のためのブラウザ拡張。',
        status: '計画中',
      },
      vscode: {
        title: 'VS Code',
        description: '開発者の生産性向上のためのエディタプラグイン。',
        status: '計画中',
      },
    },
  },

  // CTA Section
  cta: {
    title: 'プロンプト不要のAIを体験する準備はできましたか？',
    subtitle: '生産性向上のためにHawkeyeを使用する何千人ものユーザーに参加しましょう。',
    button: '無料ダウンロード',
    note: '登録不要。完全無料。',
  },

  // Footer
  footer: {
    product: '製品',
    resources: 'リソース',
    legal: '法的情報',
    language: '言語',
    features: '機能',
    useCases: '活用例',
    platforms: 'プラットフォーム',
    changelog: '更新履歴',
    documentation: 'ドキュメント',
    github: 'GitHub',
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    copyright: '© {year} Anureka Inc.. MIT License.',
  },

  // Demo Section
  demo: {
    title: 'Hawkeyeの動作を見る',
    subtitle: 'Hawkeyeの主な機能を2分で紹介',
    playVideo: 'デモを再生',
    chapters: {
      intro: 'はじめに',
      gesture: 'ジェスチャーデモ',
      features: '機能紹介',
    },
  },

  // Trust Badges
  trustBadges: {
    noCreditCard: 'クレジットカード不要',
    worksOffline: 'オフライン対応',
    dataStaysLocal: 'データはローカルに保存',
    openSource: 'オープンソース',
  },

  // Stats Section
  stats: {
    efficiency: {
      value: '10x',
      label: '効率向上',
      description: '従来のワークフローと比較',
    },
    local: {
      value: '100%',
      label: 'ローカル処理',
      description: 'データはデバイスから出ません',
    },
    platforms: {
      value: '3',
      label: 'プラットフォーム',
      description: 'デスクトップ / VS Code / Chrome',
    },
  },

  // Testimonials Section
  testimonials: {
    title: 'ユーザーの声',
    items: [
      {
        quote: 'ようやくプライバシーを尊重するAIアシスタントが登場。すべてのデータがローカルで処理され、仕事で安心して使えます。',
        author: '田中太郎',
        role: 'プロダクトマネージャー',
        avatar: '田',
      },
      {
        quote: 'Hawkeyeは私のワークフローを完全に変えました。自動的に私の作業を理解し、的確な提案をしてくれます。',
        author: '佐藤花子',
        role: 'フリーランサー',
        avatar: '佐',
      },
      {
        quote: 'オープンソースプロジェクトとして、Hawkeyeの品質は印象的です。活発なコミュニティ、頻繁なアップデート。',
        author: '鈴木一郎',
        role: '起業家',
        avatar: '鈴',
      },
    ],
  },

  // Privacy Section
  privacy: {
    title: 'プライバシー優先、セキュアな設計',
    items: {
      localProcessing: 'すべてのデータはローカル処理、アップロードなし',
      ollamaSupport: 'Ollamaローカルモデルに対応',
      optionalCloud: 'オプションでクラウドAI（Claude API）',
      openSource: '100%オープンソース＆透明性',
    },
  },

  // Product Demo (mock app window)
  productDemo: {
    windowTitle: 'Hawkeye - スマートタスクアシスタント',
    chat: 'チャット',
    chatMessage: 'ダウンロードフォルダを整理して...',
    chatResponse: '完了！23個のファイルを整理しました...',
    screenPerception: 'スクリーン認識',
    screenStatus: '現在のウィンドウを分析中...',
    fileMonitor: 'ファイル監視',
    fileStatus: '3個の新しいファイルを検出',
    clipboard: 'クリップボード',
    clipboardStatus: 'コードスニペットをキャプチャ',
    taskSuggestions: 'タスク提案',
    taskStatus: '5件の提案を生成',
    running: '実行中',
    active: 'アクティブ',
    ready: '準備完了',
    complete: '完了',
  },
}
