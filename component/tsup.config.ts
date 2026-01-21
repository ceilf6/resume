import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  // 将所有 CSS 合并到一个文件
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.css': 'copy',
    };
  },
  // 处理 CSS 文件
  onSuccess: async () => {
    const fs = await import('fs/promises');
    const path = await import('path');
    const glob = await import('glob');

    // 收集所有 CSS 文件
    const cssFiles = glob.sync('./**/*.css', {
      ignore: ['./dist/**', './node_modules/**']
    });

    let combinedCSS = '/* Resume Components Library Styles */\n\n';

    for (const file of cssFiles) {
      const content = await fs.readFile(file, 'utf-8');
      combinedCSS += `/* ${file} */\n${content}\n\n`;
    }

    // 写入合并后的 CSS
    await fs.mkdir('./dist', { recursive: true });
    await fs.writeFile('./dist/index.css', combinedCSS);

    console.log('CSS files bundled successfully');
  },
});
