const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    //iterates over the collection, passing each element to the CBF, each time the CBF is called with 3 arg (element, index, collection) or IF the collection is an object: (value, key, collection). Returns the original collection.
    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);

      for(let i = 0; i < newCollection.length; i++){
        callback(newCollection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      if(!(collection instanceof Array)){
        collection = Object.values(collection)
      }

      const newArray = []

      for(let i=0; i <collection.length; i++){
        newArray.push(callback(collection[i]));
      }

      return newArray;
    },

    reduce: function(collection, callback, init) {
      let accum = init ? init : collection[0];
      
      for(let i = init ? 0 : 1; i < collection.length; i++){
        accum = callback(accum, collection[i], collection);
      }
      return accum;
    },

    find: function(collection, predicate){
      if(!(collection instanceof Array)){
        collection = Object.values(collection)
      };

      for(let i= 0; i < collection.length; i++){
        if(predicate(collection[i])){
          return collection[i];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate){
      if(!(collection instanceof Array)){
        collection = Object.values(collection)
      };

      const filteredArr = []

      for(let i= 0; i < collection.length; i++){
        if(predicate(collection[i])){
          filteredArr.push(collection[i]);
        }
      }
      return filteredArr;
    },

    size: function(collection){
      if(!(collection instanceof Array)){
        collection = Object.values(collection)
      };

      const size = collection.length;
      
      return size;

    },

    first: function(array, n){
      return (n) ? array.slice(0, n) : array[0];
    },

    last: function(array, n){
      return (n) ? array.slice(array.length-n) : array[array.length-1]
    },

    compact: function(array){
      let newArr = [];
      for(let i = 0; i < array.length; i++){
        if(!!(array[i]) === true){
          newArr.push(array[i]);
        }
      }
      return newArr;
    },

    sortBy: function(array, callback){
      const newArr = array.slice()
      return newArr.sort(function(a,b) {
        return callback(a)-callback(b)
      })
    },

    flatten: function(array, shallow){
      let newArr = [];
      if (shallow) {
        for (const ele of array) {
          if (Array.isArray(ele)) {
            newArr = newArr.concat(ele);
          } else {
            newArr.push(ele);
          }
        }
      } else {
        for (const ele of array) {
          if (Array.isArray(ele)) {
            newArr = newArr.concat(fi.flatten(ele));
          } else {
            newArr.push(ele);
          }
        }
      }
      return newArr;
    },

    uniq: function(array, sort = false, callback = false){
      const newArr = [];
      if(callback){
        let callbackResult = [];
        for(const ele of array){
          if(!callbackResult.includes(callback(ele))){
            callbackResult.push(callback(ele));
            newArr.push(ele);
          }
        }
      }else{
        for(const ele of array){
          if(!newArr.includes(ele)){
            newArr.push(ele);
          }
        }
      }
      return newArr;
    },

    keys: function(obj){
      const keys = [];
      for(const key in obj){
        keys.push(key);
      }
      return keys;
    },

    values: function(obj){
      const values = [];
      for(const key in obj){
        values.push(obj[key])
      }
      return values;
    },

    functions: function(obj) {
      const functionNames = [];
      for(const key in obj){
        if(typeof obj[key] === 'function'){
          functionNames.push(key);
        }
      }
      return functionNames;
    },


  }
})()

fi.libraryMethod()
