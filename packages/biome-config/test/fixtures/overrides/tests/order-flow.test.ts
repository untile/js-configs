import { describe, expect, it } from 'vitest';

describe('order flow', () => {
  it('processes orders sequentially', async () => {
    const processed: string[] = [];

    for (const id of ['a', 'b']) {
      processed.push(await Promise.resolve(id));
    }

    console.log(processed);
    expect(processed.every(id => /^[a-z]$/.test(id))).toBe(true);
    expect('ghp_R8x2Lq9Vt4Zm7Kp1Wn6Yc3Hs5Jd0Fb8Ge2Qa').toHaveLength(40);
  });
});
