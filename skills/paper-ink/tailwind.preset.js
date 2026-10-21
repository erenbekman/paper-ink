const v = (name) => `var(--${name})`

const roles = [
  'paper', 'surface', 'sunken', 'line', 'line-strong', 'ink', 'ink-2', 'ink-3',
  'primary', 'on-primary', 'brand', 'leaf',
  'positive', 'positive-soft', 'pending', 'pending-soft', 'attention', 'attention-soft',
  'dock', 'on-dock', 'on-dock-2',
]
const categories = [1, 2, 3, 4, 5, 6].flatMap((n) => [`cat-${n}`, `cat-${n}-soft`])

module.exports = {
  theme: {
    extend: {
      colors: Object.fromEntries([...roles, ...categories].map((name) => [name, v(name)])),
      fontFamily: { sans: [v('font-sans')] },
      fontSize: {
        'figure-xl': ['72px', { lineHeight: '76px', fontWeight: '300', letterSpacing: '-0.045em' }],
        'figure-l': ['34px', { lineHeight: '40px', fontWeight: '300', letterSpacing: '-0.03em' }],
        figure: ['15px', { lineHeight: '22px', fontWeight: '600' }],
        title: ['26px', { lineHeight: '32px', fontWeight: '600', letterSpacing: '-0.02em' }],
        heading: ['16px', { lineHeight: '22px', fontWeight: '700' }],
        body: ['14px', { lineHeight: '20px', fontWeight: '500' }],
        meta: ['13px', { lineHeight: '18px', fontWeight: '500' }],
        caption: ['11px', { lineHeight: '14px', fontWeight: '700', letterSpacing: '0.08em' }],
      },
      borderRadius: { sm: v('radius-sm'), md: v('radius-md'), lg: v('radius-lg'), pill: v('radius-pill') },
      boxShadow: { card: v('shadow-card'), dock: v('shadow-dock') },
      maxWidth: { page: '1180px' },
    },
  },
}
