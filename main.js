console.log("this file is loaded");
$.ajax({
  type:"GET" ,
  url:"http://127.0.0.1:3000/movies/all",
  dataType:"json",
  success:function(response){
    //console.log("data from success",response);
    var data = formObject(response);
    contructDOM(data);
  },
  error:function(err){
    console.log("Error in GET method",err);
  }
});

function formObject(response){
  var flags=[],categoryObject=[];
  var length=response.length;

  for(var i=0;i<length;i++){
    var movie=response[i];
   var index=flags.indexOf(movie.language);
    if(index>=0){
      categoryObject[index].movies.push(movie);
      continue;
    }
    else{
      flags.push(movie.language);
    }
    var objectSchema={
      "category":movie.language,
      "movies":[]
    }
    objectSchema.movies.push(movie);
    categoryObject.push(objectSchema);
  }
    console.log("categoryObject",categoryObject);
    console.log(flags);
    return categoryObject;
}
function contructDOM(data){
  var categoryContent=[];
  for(var i=0;i<data.length;i++)
  {
    var objectSchema=data[i];
    console.log("constructDOM data" , objectSchema);
    var categoryTitle=$('<h3 class="categotryName>'+objectSchema.category+'</h3>');
    categoryContent.push(categoryTitle);
  }
  $('.content').html(categoryContent);
}
