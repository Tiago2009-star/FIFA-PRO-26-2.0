# Gera worker.js com todos os ficheiros da app embutidos (index, manifest, sw, icones, favicon, teams)
# Depois: dashboard Cloudflare -> Workers -> restless-math-264f -> Edit code -> colar -> Deploy
$ErrorActionPreference = 'Stop'

$entries = [ordered]@{
  '/index.html'     = @{ path='index.html';     type='text/html; charset=utf-8' }
  '/manifest.json'  = @{ path='manifest.json';  type='application/manifest+json; charset=utf-8' }
  '/sw.js'          = @{ path='sw.js';          type='text/javascript; charset=utf-8' }
  '/icon-192.png'   = @{ path='icon-192.png';   type='image/png' }
  '/icon-512.png'   = @{ path='icon-512.png';   type='image/png' }
  '/favicon.ico'    = @{ path='favicon.ico';    type='image/png' }
  '/teams2014.js'   = @{ path='teams2014.js';   type='text/javascript; charset=utf-8' }
  '/teams2010.js'   = @{ path='teams2010.js';   type='text/javascript; charset=utf-8' }
  '/teams2006.js'   = @{ path='teams2006.js';   type='text/javascript; charset=utf-8' }
  '/teams2002v3.js' = @{ path='teams2002v3.js'; type='text/javascript; charset=utf-8' }
  '/teams1998.js'   = @{ path='teams1998.js';   type='text/javascript; charset=utf-8' }
  '/teams1994.js'   = @{ path='teams1994.js';   type='text/javascript; charset=utf-8' }
  '/teams1990.js'   = @{ path='teams1990.js';   type='text/javascript; charset=utf-8' }
  '/teams1986.js'   = @{ path='teams1986.js';   type='text/javascript; charset=utf-8' }
  '/teams1982.js'   = @{ path='teams1982.js';   type='text/javascript; charset=utf-8' }
  '/teams1978.js'   = @{ path='teams1978.js';   type='text/javascript; charset=utf-8' }
  '/teams1974.js'   = @{ path='teams1974.js';   type='text/javascript; charset=utf-8' }
  '/teams1970.js'   = @{ path='teams1970.js';   type='text/javascript; charset=utf-8' }
}

function Esc-Js([string]$s) {
  $sb = New-Object System.Text.StringBuilder
  foreach ($ch in $s.ToCharArray()) {
    $c = [int]$ch
    if ($c -eq 92) { [void]$sb.Append('\\') }
    elseif ($c -eq 34) { [void]$sb.Append('\"') }
    elseif ($c -eq 10) { [void]$sb.Append('\n') }
    elseif ($c -eq 13) { [void]$sb.Append('\r') }
    elseif ($c -eq 9) { [void]$sb.Append('\t') }
    elseif ($c -lt 32 -or $c -eq 8232 -or $c -eq 8233) { [void]$sb.Append('\x' + $c.ToString('x4')) }
    else { [void]$sb.Append($ch) }
  }
  return $sb.ToString()
}

function Esc-Bin([byte[]]$bytes) {
  # Hex puro (sem \x) para o literal JS nao interpretar escapes
  $sb = New-Object System.Text.StringBuilder
  foreach ($b in $bytes) {
    [void]$sb.Append($b.ToString('x2'))
  }
  return $sb.ToString()
}

$out = New-Object System.Text.StringBuilder
[void]$out.AppendLine('// AUTO-GERADO por gen_worker.ps1 - serve a app Fifarinhas 26 com tudo embutido.')
[void]$out.AppendLine('// Colar este conteudo no editor do Cloudflare Workers e fazer Deploy.')
[void]$out.AppendLine('function _t(s) { return s; }')
[void]$out.AppendLine('function _b(hex) {')
[void]$out.AppendLine('  const buf = new Uint8Array(hex.length / 2);')
[void]$out.AppendLine('  for (let i = 0; i < buf.length; i++) buf[i] = parseInt(hex.substr(i * 2, 2), 16);')
[void]$out.AppendLine('  return buf;')
[void]$out.AppendLine('}')
[void]$out.AppendLine('const FILES = {')
foreach ($key in $entries.Keys) {
  $e = $entries[$key]
  $full = Join-Path $PSScriptRoot $e.path
  $ext = [System.IO.Path]::GetExtension($e.path).ToLower()
  if ($ext -eq '.png' -or $ext -eq '.ico') {
    $bytes = [System.IO.File]::ReadAllBytes($full)
    $lit = Esc-Bin $bytes
    $body = "_b(`"$lit`")"
  } else {
    $text = [System.IO.File]::ReadAllText($full)
    $lit = Esc-Js $text
    $body = "_t(`"$lit`")"
  }
  [void]$out.AppendLine("  `"$key`": { type: `"$($e.type)`", body: $body },")
}
[void]$out.AppendLine('};')
[void]$out.AppendLine(@'
const INDEX = FILES['/index.html'];

export default {
  async fetch(request) {
    const url = new URL(request.url);
    let key;
    try { key = decodeURIComponent(url.pathname); } catch (e) { key = url.pathname; }
    if (key === '/' || key === '') key = '/index.html';
    let file = FILES[key] || null;
    if (!file) {
      if (/\.(png|ico|json|js|html)$/i.test(key)) {
        return new Response('Not found', { status: 404, headers: { 'Content-Type': 'text/plain' } });
      }
      file = INDEX;
    }
    return new Response(file.body, {
      headers: {
        'Content-Type': file.type,
        'Cache-Control': 'no-cache',
        'Service-Worker-Allowed': '/',
        'X-Content-Type-Options': 'nosniff'
      }
    });
  }
};
'@)

[System.IO.File]::WriteAllText((Join-Path $PSScriptRoot 'worker.js'), $out.ToString(), (New-Object System.Text.UTF8Encoding($false)))
$size = [math]::Round((Get-Item (Join-Path $PSScriptRoot 'worker.js')).Length / 1KB)
Write-Host "OK worker.js gerado ($size KB)"
