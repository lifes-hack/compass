for %%i in (Y:\Projects\compass\markdowns\*.md) do (
  pandoc ./markdowns/%%~ni.md --template=new.html -c ../pages.css -f gfm+hard_line_breaks -t html5 -o ./pages/%%~ni.html
)
pause