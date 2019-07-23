var haober09 = {
  compact: function(ary) {
    return ary.filter(it => it)
  },
  chunk: function(ary,size){
    var result = [];
    for(var i = 0;i < ary.length;i += size){
    result.push(ary.slice(i,size+i) );
    if(size+i > ary.length) break;
    }
    return result;
    },
  compact2:function(ary){
    var result = [];
    for(var i = 0;i < ary.length;i++){
      if(ary[i]==false|| ary[i]==null || ary[i]==0 || ary[i]=="" || ary[i]==undefined || ary[i]==NaN) {
        continue;
      }
      result.push(ary[i]);
    }
    return result;
  },
  concat:function(ary,value){
    return function (...args){
      ary.push(value)
    }
  },
  reduce:function(ary,f,accumulator){
    for(var i = 0;i <ary.length;i++){
      return f(accumulator,a[i],i,ary);
    }
  },//reduce
  difference:function(array,values){
    var result = [];
    var difftags = true;
    for( var item of array ){
      for( var i = 0;i < values.length; i++){
        if( values[i] == item){
          difftags = false;
        } //if1
      } //for内
      if(difftags){
        result.push(item);
      } //if2
      difftags = true;
    } //for外
    return result;
  }, //differecnce;
  drop:function(array,number){
    var result = [];
    for(var i = number ; i < array.length;i++){
      result.push(array[i]);
    }
    return result;//for
  },//drop
}
