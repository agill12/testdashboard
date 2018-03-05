console.log('It worked')
queue()
.defer(d3.json,'/data')
.await(makeGraphs);

var max_speeds={};

function makeGraphs(error,hurricaneData){
    let ndx=crossfilter(hurricaneData);
    
    hurricaneData.forEach(function(d){
        console.log(typeof(d.Date))
        d.Dates=d.Date.toString()
         d.Year=parseInt(d.Dates.slice(0,4));
       
        // d['MaximumWind']=parseInt(d['MaximumWind']);
    
     
        // if(d.ID in max_speeds) {
        //     if (d['MaximumWind'] > max_speeds[d.ID])
        //         max_speeds[d.ID]=d['MaximumWind'];
        // }else{
        //     max_speeds[d.ID]=d['MaximumWind'];
        // }
        // console.log(max_speeds[d.ID])
        
    

        
});
show_select_category(ndx);
show_bar_chart(ndx);
type_chart(ndx);
show_select_year(ndx);
landfall(ndx);
see_landfall(ndx)
// console.log(Object.keys(max_speeds).length);
// for (var key in max_speeds){
//     console.log(key +" : "+max_speeds[key]);
// }

 dc.renderAll();   
}


// function getCategory(windspeed){
    
//     if (windspeed >= 157)
//         return "CAT 5";
//     else if (windspeed >=130)
//         return "CAT 4";
//     else if (windspeed >=111)
//         return "CAT 3";
//     else if (windspeed >=96)
//         return "CAT 2";
//     else if (windspeed >=74)
//         return "CAT 1";
//     else if (windspeed >=39)
//         return "TS";
//     else
//         return null;
// }



function show_bar_chart(ndx) {
    let Year_dim=ndx.dimension(
        function(d){
    if (d.Year>=2010){
        return "2010-2015"
    }else{
    from=Math.floor(d.Year/5)*5;
    to = from+4
    return from +"-"+to;}
    //return d.Year
    }
    );


    ids_found = []
    ids_found_other=[]

    let count_reduce = Year_dim.group().reduceCount(
    //     function(d){
    //     // If this ID is not already found return 1 else return 0 
    //     if(ids_found.indexOf(d.ID)==-1){
    //         ids_found.push(d.ID);
    //         return 1;
    //     }else{
    //         return 0;
    //     }
    // }
    );
    // console.log(ids_found)
    
    // console.log(count_reduce.all());
    // let id_dim=ndx.dimension(function(d){
    //     return d.ID
    // })
    
    // let id_reduce=id_dim.group().reduceSum(function(d){
    //      return d['Maximum Wind']
    // })

    dc.barChart("#named_per_year")
        .width(800)
        .height(500)
        .margins({top:10,right:50,bottom:30,left:50})
        .dimension(Year_dim)
        .group(count_reduce)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Year")
        .yAxisLabel("# Named Storms")
        .yAxis().ticks(25);
}


function show_select_category(ndx){
    
    let cat_dim=ndx.dimension(dc.pluck('CAT4'))
 let cat_group=cat_dim.group();
 
    
    // let cat_group=cat_dim.group(function(d){
    //     if (d.ID=='AL011950')
    //         return d
    //     else
    //         return 0
    //})
    

    dc.selectMenu('#select-category')
        .dimension(cat_dim)
        .group(cat_dim.group());
}
function type_chart(ndx){
var group_by_cat = ndx.dimension(dc.pluck('CAT4'));
 var total_cat = group_by_cat.group().reduceCount();
 dc.pieChart("#piechart")
           .height(330)
           .radius(90)
           .dimension(group_by_cat)
           .group(total_cat)
           .transitionDuration(500);
           dc.renderAll();
}
function show_select_year(ndx){
    
    let yearcat_dim=ndx.dimension(function(d){
        return d.Year
    })
 let yearcat_group=yearcat_dim.group();
 
    
   
    

    dc.selectMenu('#chartselect')
        .dimension(yearcat_dim)
        .group(yearcat_dim.group());
        
}
function landfall(ndx){
var group_by_year = ndx.dimension(function(d){
        return d.Year
    });
        var number_landfall = group_by_year.group().reduceCount(dc.pluck('L')); 
        dc.barChart("#landfalls")
            .width(400)
            .height(200)
            .margins({top: 10, right: 50, bottom: 30, left: 50})
            .dimension(group_by_year)
            .group(number_landfall)
            .transitionDuration(500)
            .x(d3.scale.ordinal())
            .xUnits(dc.units.ordinal)
            .xAxisLabel("Year")
            .yAxisLabel("Landfalls")
            .yAxis().ticks(6);
            dc.renderAll();
            console.log(number_landfall.all())
}
function see_landfall(ndx){
    // set projection
var projection = d3.geo.mercator();

// create path variable
var path = d3.geo.path()
    .projection(projection);
}
// queue()
// .defer(d3.csv,'data/newatlantictest.csv')
// .await(makeGraphs);

// // var max_speeds={};
// // var b=[];
// // var c=[];
// // function getCategory(windspeed){
    
// //     if (windspeed >= 157)
// //         return "CAT 5";
// //     else if (windspeed >=130)
// //         return "CAT 4";
// //     else if (windspeed >=111)
// //         return "CAT 3";
// //     else if (windspeed >=96)
// //         return "CAT 2";
// //     else if (windspeed >=74)
// //         return "CAT 1";
// //     else if (windspeed >=39)
// //         return "TS";
// //     else
// //         return null;

    
   
// // }

// function makeGraphs(error,hurricaneData){
//     let ndx=crossfilter(hurricaneData);
    
//     hurricaneData.forEach(function(d){
//         d.Year=parseInt(d.Date.slice(0,4));
       
//         // d['MaximumWind']=parseInt(d['MaximumWind']);
    
     
//         // if(d.ID in max_speeds) {
//         //     if (d['MaximumWind'] > max_speeds[d.ID])
//         //         max_speeds[d.ID]=d['MaximumWind'];
//         // }else{
//         //     max_speeds[d.ID]=d['MaximumWind'];
//         // }
// });
// //  console.log("hello")
// //     console.log(max_speeds);
// //  var a=Object.values(max_speeds);
 
 
 
// //  for (i=0;i<a.length;i++){
// //  b.push(getCategory(a[i]));
// //  c.push(a[i]);
// //  }
// //  console.log(b);
// // console.log(c);
// show_select_category(ndx);
// show_bar_chart(ndx);



//  dc.renderAll(); 
// }

// // console.log(a)
// // }


 
// function show_bar_chart(ndx) {
//     let Year_dim=ndx.dimension(function(d){
//     if (d.Year>=2010){
//         return "2010-2015"
//     }else{
//     from=Math.floor(d.Year/5)*5;
//     to = from+4
//     return from +"-"+to;}
    
//     });


//     ids_found = []
//     ids_found_other=[]
//      //returnd.ielsed++?   
//     let count_reduce = Year_dim.group().reduceSum(function(d){
//         // If this ID is not already found return 1 else return 0 
//         if(ids_found.indexOf(d.ID)==-1){
//             ids_found.push(d.ID);
            
//             return 1;
//         }else{
            
//             return 0;
//         }
//     });

//     // console.log(ids_found)
    
//     console.log(count_reduce.all());
//     // let id_dim=ndx.dimension(function(d){
//     //     return d.ID
//     // })
    
//     // let id_reduce=id_dim.group().reduceSum(function(d){
//     //      return d['Maximum Wind']
//     // })

//     dc.barChart("#named_per_year")
//         .width(800)
//         .height(500)
//         .margins({top:10,right:50,bottom:30,left:50})
//         .dimension(Year_dim)
//         .group(count_reduce)
//         .transitionDuration(500)
//         .x(d3.scale.ordinal())
//         .xUnits(dc.units.ordinal)
//         .xAxisLabel("Year")
//         .yAxisLabel("# Named Storms")
//         .yAxis().ticks(25);
// }


// function show_select_category(ndx){
// let  cat_dim=ndx.dimension(dc.pluck('CAT'))
//  let cat_group=cat_dim.group();
//  dc.selectMenu("#select-discipline")
//  .dimension(cat_dim)
//  .group(cat_group);
// }
// //     e=[]
// //     let cat_dim = ndx.dimension(function(d){
      
// //         for (i=0;i<c.length;i++){
// //  if(max_speeds[d.ID]=c[i]){
            
// //             e.push(c[i])  ;
// //         }
// //  //}
    
// // }
// //         console.log(e)
// //     }

// //     )
// //   let q=cat_dim.group()
// //   console.log(q.all())
//     // let cat_group=cat_dim.group(function(d){
//     //     if (d.ID=='AL011950')
//     //         return d
//     //     else
//     //         return 0
//     //})
//     // let count_reduce = Year_dim.group().reduceSum(function(d){
//     //     // If this ID is not already found return 1 else return 0 
//     //     if(ids_found.indexOf(d.ID)==-1){
//     //         ids_found.push(d.ID);
//     //         return 1;
//     //     }else{
//     //         return 0;
//     //     }

//     // dc.selectMenu('#select-category')
//      //    .dimension(cat_dim)
//      //    .group(cat_dim.group());


