function meleeRangedGrouping (str) {
    //your code here
    if(str == ''){
        return []
    }
    var arr = str.split(',')
    // return arr
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].split('-');
    }
    var res = {}
    for(var i = 0; i < arr.length; i++){
        if(res[arr[i][1]] == undefined){
            res[arr[i][1]] = []
            res[arr[i][1]].push(arr[i][0])
        }
        else{
            res[arr[i][1]].push(arr[i][0])
        }
    }
    var result = []
    for (var i in res){
        result.push(res[i])
    }
    if(result.length == 1){
        result.push([]);
    }
    return result
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []