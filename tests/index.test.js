const capitalize = require('../src/index');

describe('capitalize', () => {
  it('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('leaves strings with an initial capital letter unchanged', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('capitalizes the first letter of a string, leaving the rest unchanged', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
  });

  it('returns an empty string for empty input', () => {
    expect(capitalize('')).toBe('');
  });

  it('handles null and undefined as empty strings', () => {
    expect(capitalize(null)).toBe('');
    expect(capitalize(undefined)).toBe('');
  });

  it('does not change numbers', () => {
    expect(capitalize('123abc')).toBe('123abc');
  });
});
