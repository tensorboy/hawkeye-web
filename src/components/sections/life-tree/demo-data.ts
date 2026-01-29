/**
 * Life Tree Demo Data
 *
 * Hardcoded realistic demo tree for the web showcase.
 * No API calls — purely static demonstration data.
 */

export interface DemoNode {
  id: string
  label: string
  type: 'root' | 'stage' | 'goal' | 'task' | 'experiment'
  stage?: string
  confidence: number
  experimentStatus?: 'running' | 'succeeded' | 'failed'
  children: DemoNode[]
}

// Natural earth-tone palette - more saturated for better mobile visibility
export const STAGE_COLORS: Record<string, string> = {
  career: '#4a90c2',   // Clearer blue
  learning: '#9b6cc2', // Richer purple
  health: '#4da676',   // Clearer green
  creativity: '#d68090', // Warmer rose/coral
  finance: '#4ab3c2',  // Clearer teal/cyan
}

export const STAGE_LABELS: Record<string, string> = {
  career: 'Career',
  learning: 'Learning',
  health: 'Health',
  creativity: 'Creativity',
  finance: 'Finance',
}

// Localized labels for all tree nodes
const NODE_LABELS: Record<string, Record<string, string>> = {
  en: {
    'root': 'Life Goal',
    'career': 'Career',
    'career-code': 'Software Dev',
    'career-code-1': 'TypeScript',
    'career-exp-1': 'Pomodoro',
    'learning': 'Learning',
    'learn-ai': 'AI / ML',
    'learn-ai-1': 'LLM Papers',
    'learn-exp-1': 'Daily Reading',
    'health': 'Health',
    'health-fit': 'Fitness',
    'health-fit-1': 'Morning Run',
    'health-exp-1': '5K Plan',
    'creativity': 'Creativity',
    'create-side': 'Side Projects',
    'create-side-1': 'Open Source',
    'finance': 'Finance',
    'finance-invest': 'Investing',
    'finance-invest-1': 'Index Funds',
    'finance-exp-1': 'Auto Save 20%',
  },
  zh: {
    'root': '人生目标',
    'career': '事业',
    'career-code': '软件开发',
    'career-code-1': 'TypeScript',
    'career-exp-1': '番茄工作法',
    'learning': '学习',
    'learn-ai': 'AI / ML',
    'learn-ai-1': 'LLM论文',
    'learn-exp-1': '每日阅读',
    'health': '健康',
    'health-fit': '健身',
    'health-fit-1': '晨跑',
    'health-exp-1': '5公里计划',
    'creativity': '创造力',
    'create-side': '副业项目',
    'create-side-1': '开源贡献',
    'finance': '财务',
    'finance-invest': '投资',
    'finance-invest-1': '指数基金',
    'finance-exp-1': '自动储蓄20%',
  },
  ja: {
    'root': '人生目標',
    'career': 'キャリア',
    'career-code': 'ソフト開発',
    'career-code-1': 'TypeScript',
    'career-exp-1': 'ポモドーロ',
    'learning': '学習',
    'learn-ai': 'AI / ML',
    'learn-ai-1': 'LLM論文',
    'learn-exp-1': '毎日読書',
    'health': '健康',
    'health-fit': 'フィットネス',
    'health-fit-1': '朝ラン',
    'health-exp-1': '5Kプラン',
    'creativity': '創造性',
    'create-side': '副業',
    'create-side-1': 'オープンソース',
    'finance': '資産',
    'finance-invest': '投資',
    'finance-invest-1': 'インデックス',
    'finance-exp-1': '自動貯金20%',
  },
  ko: {
    'root': '인생 목표',
    'career': '커리어',
    'career-code': '소프트웨어',
    'career-code-1': 'TypeScript',
    'career-exp-1': '뽀모도로',
    'learning': '학습',
    'learn-ai': 'AI / ML',
    'learn-ai-1': 'LLM 논문',
    'learn-exp-1': '매일 독서',
    'health': '건강',
    'health-fit': '피트니스',
    'health-fit-1': '아침 러닝',
    'health-exp-1': '5K 계획',
    'creativity': '창의성',
    'create-side': '사이드',
    'create-side-1': '오픈소스',
    'finance': '재정',
    'finance-invest': '투자',
    'finance-invest-1': '인덱스펀드',
    'finance-exp-1': '자동저축20%',
  },
  es: {
    'root': 'Meta Vital',
    'career': 'Carrera',
    'career-code': 'Desarrollo',
    'career-code-1': 'TypeScript',
    'career-exp-1': 'Pomodoro',
    'learning': 'Aprendizaje',
    'learn-ai': 'IA / ML',
    'learn-ai-1': 'Papers LLM',
    'learn-exp-1': 'Lectura Diaria',
    'health': 'Salud',
    'health-fit': 'Fitness',
    'health-fit-1': 'Correr AM',
    'health-exp-1': 'Plan 5K',
    'creativity': 'Creatividad',
    'create-side': 'Proyectos',
    'create-side-1': 'Open Source',
    'finance': 'Finanzas',
    'finance-invest': 'Inversión',
    'finance-invest-1': 'Fondos Índice',
    'finance-exp-1': 'Ahorro Auto 20%',
  },
  fr: {
    'root': 'But de Vie',
    'career': 'Carrière',
    'career-code': 'Développeur',
    'career-code-1': 'TypeScript',
    'career-exp-1': 'Pomodoro',
    'learning': 'Apprentissage',
    'learn-ai': 'IA / ML',
    'learn-ai-1': 'Articles LLM',
    'learn-exp-1': 'Lecture Quotid.',
    'health': 'Santé',
    'health-fit': 'Fitness',
    'health-fit-1': 'Course Matin',
    'health-exp-1': 'Plan 5K',
    'creativity': 'Créativité',
    'create-side': 'Projets Perso',
    'create-side-1': 'Open Source',
    'finance': 'Finances',
    'finance-invest': 'Investir',
    'finance-invest-1': 'Fonds Indice',
    'finance-exp-1': 'Épargne Auto 20%',
  },
  de: {
    'root': 'Lebensziel',
    'career': 'Karriere',
    'career-code': 'Softwareentw.',
    'career-code-1': 'TypeScript',
    'career-exp-1': 'Pomodoro',
    'learning': 'Lernen',
    'learn-ai': 'KI / ML',
    'learn-ai-1': 'LLM Papers',
    'learn-exp-1': 'Tägl. Lesen',
    'health': 'Gesundheit',
    'health-fit': 'Fitness',
    'health-fit-1': 'Morgenlauf',
    'health-exp-1': '5K Plan',
    'creativity': 'Kreativität',
    'create-side': 'Nebenprojekte',
    'create-side-1': 'Open Source',
    'finance': 'Finanzen',
    'finance-invest': 'Investieren',
    'finance-invest-1': 'Indexfonds',
    'finance-exp-1': 'Auto-Sparen 20%',
  },
}

// Helper function to get localized label
export function getLocalizedLabel(nodeId: string, locale: string): string {
  const labels = NODE_LABELS[locale] ?? NODE_LABELS.en
  return labels[nodeId] ?? NODE_LABELS.en[nodeId] ?? nodeId
}

// Helper function to localize a tree node and its children
function localizeNode(node: DemoNode, locale: string): DemoNode {
  return {
    ...node,
    label: getLocalizedLabel(node.id, locale),
    children: node.children.map(child => localizeNode(child, locale)),
  }
}

// Get localized demo tree
export function getLocalizedDemoTree(locale: string): DemoNode {
  return localizeNode(demoTree, locale)
}

// Legend labels for different locales
const LEGEND_LABELS: Record<string, Record<string, string>> = {
  en: {
    root: 'Root',
    stage: 'Stage',
    goal: 'Goal',
    task: 'Task',
    experiment: 'Experiment',
    hawkeye: 'Hawkeye (AI in every node)',
  },
  zh: {
    root: '根节点',
    stage: '阶段',
    goal: '目标',
    task: '任务',
    experiment: '实验',
    hawkeye: 'Hawkeye (每个节点都有AI)',
  },
  ja: {
    root: 'ルート',
    stage: 'ステージ',
    goal: '目標',
    task: 'タスク',
    experiment: '実験',
    hawkeye: 'Hawkeye (全ノードにAI)',
  },
  ko: {
    root: '루트',
    stage: '단계',
    goal: '목표',
    task: '작업',
    experiment: '실험',
    hawkeye: 'Hawkeye (모든 노드에 AI)',
  },
  es: {
    root: 'Raíz',
    stage: 'Etapa',
    goal: 'Meta',
    task: 'Tarea',
    experiment: 'Experimento',
    hawkeye: 'Hawkeye (IA en cada nodo)',
  },
  fr: {
    root: 'Racine',
    stage: 'Étape',
    goal: 'Objectif',
    task: 'Tâche',
    experiment: 'Expérience',
    hawkeye: 'Hawkeye (IA dans chaque nœud)',
  },
  de: {
    root: 'Wurzel',
    stage: 'Phase',
    goal: 'Ziel',
    task: 'Aufgabe',
    experiment: 'Experiment',
    hawkeye: 'Hawkeye (KI in jedem Knoten)',
  },
}

// Get localized legend labels
export function getLegendLabels(locale: string): Record<string, string> {
  return LEGEND_LABELS[locale] ?? LEGEND_LABELS.en
}

// Hawkeye action labels for different node types and stages (localized)
const HAWKEYE_ACTIONS: Record<string, Record<string, { action: string; benefit: string }>> = {
  en: {
    career: { action: 'Efficiency', benefit: '+40%' },
    learning: { action: 'Smart Learn', benefit: '+3x' },
    health: { action: 'Health Guard', benefit: '+25%' },
    creativity: { action: 'Inspiration', benefit: '+2x' },
    finance: { action: 'Smart Finance', benefit: '+15%' },
    root: { action: 'Global Sync', benefit: '10x' },
    goal: { action: 'Path Optimize', benefit: '+50%' },
    task: { action: 'Automate', benefit: '+60%' },
    experiment: { action: 'Risk Monitor', benefit: 'Safe' },
  },
  zh: {
    career: { action: '效率提升', benefit: '+40%' },
    learning: { action: '智能学习', benefit: '+3x' },
    health: { action: '健康守护', benefit: '+25%' },
    creativity: { action: '灵感激发', benefit: '+2x' },
    finance: { action: '智能理财', benefit: '+15%' },
    root: { action: '全局协调', benefit: '10x' },
    goal: { action: '路径优化', benefit: '+50%' },
    task: { action: '自动化', benefit: '+60%' },
    experiment: { action: '风险监测', benefit: '安全' },
  },
  ja: {
    career: { action: '効率UP', benefit: '+40%' },
    learning: { action: 'スマート学習', benefit: '+3x' },
    health: { action: '健康ガード', benefit: '+25%' },
    creativity: { action: 'インスピ', benefit: '+2x' },
    finance: { action: 'スマート財務', benefit: '+15%' },
    root: { action: '全体連携', benefit: '10x' },
    goal: { action: 'パス最適化', benefit: '+50%' },
    task: { action: '自動化', benefit: '+60%' },
    experiment: { action: 'リスク監視', benefit: '安全' },
  },
  ko: {
    career: { action: '효율 상승', benefit: '+40%' },
    learning: { action: '스마트학습', benefit: '+3x' },
    health: { action: '건강 가드', benefit: '+25%' },
    creativity: { action: '영감', benefit: '+2x' },
    finance: { action: '스마트재정', benefit: '+15%' },
    root: { action: '글로벌 동기화', benefit: '10x' },
    goal: { action: '경로 최적화', benefit: '+50%' },
    task: { action: '자동화', benefit: '+60%' },
    experiment: { action: '리스크 감시', benefit: '안전' },
  },
  es: {
    career: { action: 'Eficiencia', benefit: '+40%' },
    learning: { action: 'Aprendizaje', benefit: '+3x' },
    health: { action: 'Salud Guard', benefit: '+25%' },
    creativity: { action: 'Inspiración', benefit: '+2x' },
    finance: { action: 'Finanzas IA', benefit: '+15%' },
    root: { action: 'Sincro Global', benefit: '10x' },
    goal: { action: 'Optimizar', benefit: '+50%' },
    task: { action: 'Automatizar', benefit: '+60%' },
    experiment: { action: 'Monitor Riesgo', benefit: 'Seguro' },
  },
  fr: {
    career: { action: 'Efficacité', benefit: '+40%' },
    learning: { action: 'Apprendre IA', benefit: '+3x' },
    health: { action: 'Santé Guard', benefit: '+25%' },
    creativity: { action: 'Inspiration', benefit: '+2x' },
    finance: { action: 'Finance IA', benefit: '+15%' },
    root: { action: 'Sync Global', benefit: '10x' },
    goal: { action: 'Optimiser', benefit: '+50%' },
    task: { action: 'Automatiser', benefit: '+60%' },
    experiment: { action: 'Surveiller', benefit: 'Sûr' },
  },
  de: {
    career: { action: 'Effizienz', benefit: '+40%' },
    learning: { action: 'Smart Lernen', benefit: '+3x' },
    health: { action: 'Gesund Guard', benefit: '+25%' },
    creativity: { action: 'Inspiration', benefit: '+2x' },
    finance: { action: 'Smart Finanz', benefit: '+15%' },
    root: { action: 'Global Sync', benefit: '10x' },
    goal: { action: 'Optimieren', benefit: '+50%' },
    task: { action: 'Automatisieren', benefit: '+60%' },
    experiment: { action: 'Risiko-Monitor', benefit: 'Sicher' },
  },
}

// Get localized Hawkeye action
export function getHawkeyeAction(key: string, locale: string): { action: string; benefit: string } {
  const actions = HAWKEYE_ACTIONS[locale] ?? HAWKEYE_ACTIONS.en
  return actions[key] ?? HAWKEYE_ACTIONS.en[key] ?? HAWKEYE_ACTIONS.en.task
}

export const demoTree: DemoNode = {
  id: 'root',
  label: 'Life Goal',
  type: 'root',
  confidence: 1,
  children: [
    {
      id: 'career',
      label: 'Career',
      type: 'stage',
      stage: 'career',
      confidence: 0.95,
      children: [
        {
          id: 'career-code',
          label: 'Software Dev',
          type: 'goal',
          stage: 'career',
          confidence: 0.92,
          children: [
            { id: 'career-code-1', label: 'TypeScript', type: 'task', stage: 'career', confidence: 0.88, children: [] },
            {
              id: 'career-exp-1',
              label: 'Pomodoro',
              type: 'experiment',
              stage: 'career',
              confidence: 0.7,
              experimentStatus: 'running',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'learning',
      label: 'Learning',
      type: 'stage',
      stage: 'learning',
      confidence: 0.88,
      children: [
        {
          id: 'learn-ai',
          label: 'AI / ML',
          type: 'goal',
          stage: 'learning',
          confidence: 0.85,
          children: [
            { id: 'learn-ai-1', label: 'LLM Papers', type: 'task', stage: 'learning', confidence: 0.8, children: [] },
            {
              id: 'learn-exp-1',
              label: 'Daily Reading',
              type: 'experiment',
              stage: 'learning',
              confidence: 0.65,
              experimentStatus: 'succeeded',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'health',
      label: 'Health',
      type: 'stage',
      stage: 'health',
      confidence: 0.82,
      children: [
        {
          id: 'health-fit',
          label: 'Fitness',
          type: 'goal',
          stage: 'health',
          confidence: 0.78,
          children: [
            { id: 'health-fit-1', label: 'Morning Run', type: 'task', stage: 'health', confidence: 0.85, children: [] },
            {
              id: 'health-exp-1',
              label: '5K Plan',
              type: 'experiment',
              stage: 'health',
              confidence: 0.6,
              experimentStatus: 'running',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 'creativity',
      label: 'Creativity',
      type: 'stage',
      stage: 'creativity',
      confidence: 0.7,
      children: [
        {
          id: 'create-side',
          label: 'Side Projects',
          type: 'goal',
          stage: 'creativity',
          confidence: 0.68,
          children: [
            { id: 'create-side-1', label: 'Open Source', type: 'task', stage: 'creativity', confidence: 0.72, children: [] },
          ],
        },
      ],
    },
    {
      id: 'finance',
      label: 'Finance',
      type: 'stage',
      stage: 'finance',
      confidence: 0.75,
      children: [
        {
          id: 'finance-invest',
          label: 'Investing',
          type: 'goal',
          stage: 'finance',
          confidence: 0.7,
          children: [
            { id: 'finance-invest-1', label: 'Index Funds', type: 'task', stage: 'finance', confidence: 0.8, children: [] },
            {
              id: 'finance-exp-1',
              label: 'Auto Save 20%',
              type: 'experiment',
              stage: 'finance',
              confidence: 0.6,
              experimentStatus: 'succeeded',
              children: [],
            },
          ],
        },
      ],
    },
  ],
}
