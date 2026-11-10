export function maybeThrow(ok: boolean) {
  if (!ok) {
    new Error('forgotten');
  }
}

export const power = 2 ^ 3;

export function cleanup() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

export function run() {
  setTimeout("cleanup()", 10);
}

export async function save(): Promise<void> {}

export function fireAndForget() {
  save();
}

export function isSame(value: object) {
  return value === {};
}

export const githubToken = 'ghp_R8x2Lq9Vt4Zm7Kp1Wn6Yc3Hs5Jd0Fb8Ge2Qa';

export function check() {
  if (save()) {
    return true;
  }

  return false;
}
