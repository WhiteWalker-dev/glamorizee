import fs from 'fs/promises';
import path from 'path';

const SCREENS_FILE = 'C:/Users/crowd/.gemini/antigravity/brain/c5266d8a-6278-4a2e-b70d-989f1da4c5b7/.system_generated/steps/23/output.txt';
const COMPONENTS_DIR = path.join(process.cwd(), 'src', 'pages');
const SHARED_DIR = path.join(process.cwd(), 'src', 'components');

async function main() {
  await fs.mkdir(COMPONENTS_DIR, { recursive: true });
  await fs.mkdir(SHARED_DIR, { recursive: true });

  const data = JSON.parse(await fs.readFile(SCREENS_FILE, 'utf-8'));
  const screens = data.screens.filter(s => s.htmlCode && s.htmlCode.downloadUrl);

  let headerExtracted = false;
  let footerExtracted = false;

  for (const screen of screens) {
    if (!screen.title) continue;
    const componentName = screen.title.split('|')[0].replace(/[^a-zA-Z0-9]/g, '').trim() || 'Home';
    console.log(`Processing ${componentName}...`);

    const response = await fetch(screen.htmlCode.downloadUrl);
    let html = await response.text();

    // Convert class to className
    html = html.replace(/class=/g, 'className=');
    // Convert generic HTML void elements to be self-closing for JSX
    html = html.replace(/<img([^>]+[^\/])>/g, '<img$1/>');
    html = html.replace(/<input([^>]+[^\/])>/g, '<input$1/>');
    html = html.replace(/<br([^>]*[^\/])>/g, '<br$1/>');
    html = html.replace(/<hr([^>]*[^\/])>/g, '<hr$1/>');
    // Fix some SVG and other attributes
    html = html.replace(/stroke-width=/g, 'strokeWidth=');
    html = html.replace(/stroke-linecap=/g, 'strokeLinecap=');
    html = html.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    html = html.replace(/fill-rule=/g, 'fillRule=');
    html = html.replace(/clip-rule=/g, 'clipRule=');
    html = html.replace(/for=/g, 'htmlFor=');

    // Extract Header
    if (!headerExtracted) {
      const headerMatch = html.match(/<header[\s\S]*?<\/header>/);
      if (headerMatch) {
        let headerHtml = headerMatch[0];
        // Convert a href="#" to React Router Link if possible, or just keep as is
        const headerComponent = `export default function Header() {\n  return (\n    ${headerHtml}\n  );\n}\n`;
        await fs.writeFile(path.join(SHARED_DIR, 'Header.jsx'), headerComponent);
        headerExtracted = true;
      }
    }

    // Extract Footer
    if (!footerExtracted) {
      const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/);
      if (footerMatch) {
        const footerHtml = footerMatch[0];
        const footerComponent = `export default function Footer() {\n  return (\n    ${footerHtml}\n  );\n}\n`;
        await fs.writeFile(path.join(SHARED_DIR, 'Footer.jsx'), footerComponent);
        footerExtracted = true;
      }
    }

    // Extract Main Content
    let mainMatch = html.match(/<main[\s\S]*?<\/main>/);
    let mainContent = '';
    if (mainMatch) {
      mainContent = mainMatch[0];
    } else {
      // Fallback if no main tag, extract body content except header and footer
      const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
      if (bodyMatch) {
        mainContent = bodyMatch[1]
          .replace(/<header[\s\S]*?<\/header>/, '')
          .replace(/<footer[\s\S]*?<\/footer>/, '');
      }
    }

    const componentCode = `export default function ${componentName}() {\n  return (\n    ${mainContent}\n  );\n}\n`;
    await fs.writeFile(path.join(COMPONENTS_DIR, `${componentName}.jsx`), componentCode);
  }

  console.log('Done generating components!');
}

main().catch(console.error);
