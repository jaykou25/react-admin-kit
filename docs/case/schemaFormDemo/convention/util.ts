import { waitFor } from '@testing-library/react';

export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitForWaitTime = async (time: number = 100) => {
  await waitFor(
    async () => {
      return waitTimePromise(time);
    },
    {
      timeout: time + 100,
    },
  );
  return;
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};
