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

export const STAGE_COLORS: Record<string, string> = {
  career: '#3b82f6',
  learning: '#8b5cf6',
  health: '#10b981',
  creativity: '#ec4899',
  finance: '#06b6d4',
}

export const STAGE_LABELS: Record<string, string> = {
  career: 'Career',
  learning: 'Learning',
  health: 'Health',
  creativity: 'Creativity',
  finance: 'Finance',
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
