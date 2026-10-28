import { cp, mkdir, readFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="(assets\/[^"#]+|styles\.css|app\.js)"/g)) {
  await readFile(path.join(root, match[1]));
}
const dist = path.join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const name of ['index.html', 'styles.css', 'app.js', 'assets', '.nojekyll']) await cp(path.join(root, name), path.join(dist, name), { recursive: true });
console.log('Build complete: dist/ (static hosting, no runtime dependencies)');
