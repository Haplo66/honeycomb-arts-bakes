import { readdirSync } from 'node:fs';

const MAX_IMAGES = 5;

export interface ScanResult {
  found: boolean;
  files: string[];
}

export function scanImageFolder(folderPath: string): ScanResult {
  try {
    const files = readdirSync(folderPath)
      .filter((f) => /\.jpg$/i.test(f))
      .sort()
      .slice(0, MAX_IMAGES);

    return { found: files.length > 0, files };
  } catch {
    return { found: false, files: [] };
  }
}
