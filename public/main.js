console.log("hello");
$.ajax({
  type:"GET",
  url:"https://api.myjson.com/bins/tls49",
  dataType:"json",
  success:function(response){
    //console.log("Data from success",response);
var data=   formObject(response);
constructDOM(data);
  },
  error:function(err){
    console.log("Data from error",err);
  }
});
function formObject(response){
  var flags=[],categoryObject=[];var length=response.length;
  for(var i=0;i<length;i++){
    var movie=response[i];
    //console.log("movie",movie);
var temp=flags.indexOf(movie.language);
if(temp==-1){
  flags.push(movie.language);
}
else{
  categoryObject[temp].movies.push(movie);
  continue;
}


  var objectScheme={
    "category":movie.language,
    "movies":[]
  }
  objectScheme.movies.push(movie);
  categoryObject.push(objectScheme);
  //console.log("formObject response",response);

}
return categoryObject;
//console.log(categoryObject);
}
function constructDOM(data){
console.log(data);
var categoryContent=[];
for(var i=0;i<data.length;i++){
  var objectSchema=data[i];

  var categoryTitle=$('<h3 class="categoryName">'+objectSchema.category+'</h3>');
  categoryContent.push(categoryTitle);
}
$('.content').html(categoryContent);
console.log(categoryContent);
}
