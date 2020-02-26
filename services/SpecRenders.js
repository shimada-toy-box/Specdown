export default [
  {
    name: 'rspec',
    symbols: {
      d: (body) => `describe '${body}' do`,
      c: (body) => `context '${body}' do`,
      i: (body) => `xit '${body}' do`
    },
    comment: (body) => `# ${body}`,
    terminal: 'end'
  },
  {
    name: 'jest',
    symbols: {
      d: (body) => `describe('${body}', () => {`,
      c: (body) => `describe('${body}', () => {`,
      i: (body) => `it('${body}', () => {`
    },
    comment: (body) => `// ${body}`,
    terminal: '}'
  }
]