const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;
      
      // Replace absolute src paths like src="/images/..." with dynamic base paths
      content = content.replace(/src="\/([^"\n\r]+)"/g, (match, p1) => {
        return `src={\`\${import.meta.env.BASE_URL}${p1}\`}`;
      });
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

walk(path.join(__dirname, 'src'));
