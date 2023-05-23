const req = new XMLHttpRequest();
let categories = [];
let pages = [];
function print(){
  for(let i=0;i<categories.length;i++){
    document.getElementById("categories").innerHTML += '<li id="' + categories[i] + '"><p id="' + categories[i] + '_a" class="a">'+ categories[i] +'</p><ul id="' + categories[i] + '_f" class="f"></ul></li>';
  }
  for(let i=0;i<pages.length;i++){
    for(let j=0;j<pages[i].length;j++){
      document.getElementById(categories[i] + "_f").innerHTML += '<li id="' + pages[i][j] +'"><a id="' + pages[i][j] + '_a" href="./pages/'+ pages[i][j] +'">'+ pages[i][j] +'</a></li>';
    }
  }
}
$(function(){
  $.getJSON("pages.json").done(function (json){
    for(let i=0;i<json.pages.length;i++){
      if(!categories.includes(json.pages[i].category)){
        categories.push(json.pages[i].category);
        pages.push([]);
      }
      pages[categories.indexOf(json.pages[i].category)].push(json.pages[i].name);
    }
    print();
    $(".a").on('click', function(){
      let findElm = $(this).next(".f");
      $(findElm).slideToggle();
    })
    if($(this).hasClass('close')){
      $(this).removeClass('close');
    }else{
      $(this).addClass('close');
    }
  }).fail(function(){
    console.log("failed");
  });
});