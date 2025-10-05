@echo off
echo Building for Cloudflare Pages...
echo.

echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo Error installing dependencies
    pause
    exit /b 1
)

echo.
echo Building project...
call npm run build:cf
if %errorlevel% neq 0 (
    echo Error building project
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo Output directory: dist/
echo.
echo You can now:
echo 1. Upload the contents of the 'dist' folder to Cloudflare Pages
echo 2. Or connect your Git repository to Cloudflare Pages for automatic deployment
echo.
pause
