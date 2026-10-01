@echo off
set "DST=C:\Users\Utilizador\Documents\cromos_temp\index.html"
set "SRC="
if exist "C:\Users\Utilizador\Downloads\index.html" set "SRC=C:\Users\Utilizador\Downloads\index.html"
if not defined SRC if exist "C:\Users\Utilizador\Downloads\index (1).html" set "SRC=C:\Users\Utilizador\Downloads\index (1).html"

if not defined SRC (
  echo ERRO: nao encontrei a versao do site na pasta Downloads.
  echo Abre o site https://restless-math-264f.tiagoserra2009.workers.dev/ e faz Ctrl+S
  echo para descarregar o index.html para a pasta Downloads.
  pause
  exit /b 1
)

echo A copiar %SRC%
echo            para %DST%
copy /y "%SRC%" "%DST%" >nul
if %errorlevel%==0 (
  echo.
  echo OK! O index.html foi substituido pelo codigo exato do site.
  echo.
  echo Passo seguinte:
  echo   1. Abre o ficheiro limpar_cache_imagens.html (na pasta cromos_temp) e clica no botao.
  echo   2. Depois abre o index.html (se estiver aberto, faz Ctrl+F5).
  echo.
) else (
  echo.
  echo ERRO ao copiar. Fecha o index.html se estiver aberto e tenta novamente.
)
pause
