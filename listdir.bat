@echo off
:: This script lists all non-hidden files and directories in tree format
:: and saves them to list.txt

setlocal enabledelayedexpansion

:: Clear or create list.txt
echo Directory tree of %CD% (excluding hidden files and folders) > list.txt
echo. >> list.txt

:: Create a recursive function to process directories
(for /d %%D in (*) do (
    if /i not "%%~aD"=="dhr" (
        echo %%D
        pushd "%%D"
        for /f "delims=" %%F in ('dir /B /A:-H') do echo   %%F
        popd
    )
)) >> list.txt

:: Add files in the current directory (excluding hidden files)
(for /f "delims=" %%F in ('dir /B /A:-H') do echo %%F) >> list.txt

echo.
echo Directory listing saved to list.txt

endlocal
