const fs = require('fs/promises');
const path = require('path');
async function fix() {
  const dirs = [
    path.join(process.cwd(), 'src', 'pages'),
    path.join(process.cwd(), 'src', 'components')
  ];

  for (const dir of dirs) {
    const files = await fs.readdir(dir);
    for (const file of files) {
      if (file.endsWith('.jsx')) {
        let content = await fs.readFile(path.join(dir, file), 'utf8');
        content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
        
        content = content.replace(/style=\"([^\"]+)\"/g, (match, p1) => {
          const styles = p1.split(';').filter(s => s.trim() !== '');
          const obj = styles.reduce((acc, curr) => {
            const [key, ...rest] = curr.split(':');
            const value = rest.join(':');
            if (key && value) {
              const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
              acc.push(`'${camelKey}': '${value.trim()}'`);
            }
            return acc;
          }, []);
          return `style={{${obj.join(', ')}}}`;
        });
        await fs.writeFile(path.join(dir, file), content);
      }
    }
  }
}
fix().catch(console.error);
