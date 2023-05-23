for %%i in (Y:\Projects\compass\markdowns\*.md) do (
  pandoc --embed-resources Y:/Projects/compass/markdowns/%%~ni.md --template=new.html -c pages.css -f gfm+hard_line_breaks -t html5 -o ./pages/%%~ni.html
)
pause