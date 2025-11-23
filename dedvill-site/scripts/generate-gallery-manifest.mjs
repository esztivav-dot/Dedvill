import fs from 'node:fs'
import path from 'node:path'

try {
  const cwd = process.cwd()
  const galleryDir = path.join(cwd, 'public', 'gallery')
  const manifestPath = path.join(galleryDir, 'manifest.json')

  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true })
  }

  const exts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])
  const files = fs
    .readdirSync(galleryDir, { withFileTypes: true })
    .filter(d => d.isFile())
    .map(d => d.name)
    .filter(name => exts.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))

  fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2) + '\n', 'utf8')
  console.log(`Gallery manifest written (${files.length} items): ${path.relative(cwd, manifestPath)}`)
} catch (err) {
  console.error('Failed to generate gallery manifest:', err)
  process.exitCode = 1
}
