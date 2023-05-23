for %%i in (Y:\Projects\compass\markdowns\*.md) do (
  pandoc --css Y:\Projects\compass\pages.css --template=Y:\Projects\compass\new.html -s Y:/Projects/compass/markdowns/%%~ni.md -o Y:/Projects/compass/pages/%%~ni.html -f gfm+hard_line_breaks
)
pause