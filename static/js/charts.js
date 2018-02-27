queue()
.defer(d3.csv,'data/newatlantic.csv')
.await(makeGraphs);


function makeGraphs(error,hurricaneData){
let ndx=crossfilter(hurricaneData);


hurricaneData.forEach(function(d){
    d.Year=d.Date.slice(0,4);
    if (d.Year==2015){
        d.Year=2010
    }else{
    d.Year=Math.floor(d.Year/5)*5;}
})
// Years=[]
let name_dim=ndx.dimension(function(d){
    // if(Years.indexOf(Math.floor(d.Year/5)*5)==-1){
    //     Years.push(Math.floor(d.Year/5)*5);
    // }
   
    return d.Year;
    });
// console.log(Years)

// function Years_Groups(){
     
   
//     }
    

ids_found = []

let count_reduce = name_dim.group().reduceSum(function(d){
    // If this ID is not already found return 1 else return 0 
    if(ids_found.indexOf(d.ID)==-1){
        ids_found.push(d.ID);
        return 1;
    }else{
        return 0;
    }
    
    
});




console.log(count_reduce.all());


dc.barChart("#named_per_year")
.width(800)
.height(800)
.margins({top:10,right:50,bottom:30,left:50})
.dimension(name_dim)
.group(count_reduce)
.transitionDuration(500)
// .centerBar(true)
// .gap(1)
.x(d3.scale.ordinal())

.xUnits(dc.units.ordinal)
.xAxisLabel("Year")
.yAxisLabel("# Named Storms")
.yAxis().ticks(50);
 dc.renderAll();   
}
