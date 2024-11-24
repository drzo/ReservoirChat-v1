import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateTimeSeriesData(length: number): [number[][], number[][]] {
  const inputs: number[][] = [];
  const targets: number[][] = [];
  
  for (let i = 0; i < length; i++) {
    const t = i * 0.1;
    inputs.push([Math.sin(t) + 0.1 * Math.random()]);
    targets.push([Math.sin(t + 0.1)]);
  }
  
  return [inputs, targets];
}

export function calculateMSE(predictions: number[][], targets: number[][]): number {
  let mse = 0;
  const n = predictions.length;
  
  for (let i = 0; i < n; i++) {
    mse += Math.pow(predictions[i][0] - targets[i][0], 2);
  }
  
  return mse / n;
}