var QuadTree = require('simple-quadtree');


var GLOBAL_COUNT = 0

var qt = QuadTree(0, 0, 100, 100);
var sq1 = {x: 0, y: 0, w: 1, h: 1, name: '0'};
var sq1_ = {x: 0, y: 0, w: 16, h: 16, name: '-1'};
var sq1__ = {x: 100, y: 100, w: 100, h: 100, name: '-1'};
qt.put(sq1);
qt.put(sq1_);

qt.remove(sq1__, 'name')

// for(var x=0; x<10000; x++){
//   qt.put({x: 1, y:0, w: 1, h:1, name:x})
//   // console.log(x);
// }

// qt.get(sq1, function(obj){
//   console.log(obj)
//   return true
// })

// console.log(qt.update(sq1, 'name', sq1_))

qt.get(sq1, function(obj){
  console.log(obj)
  return true
})

function colliding(_sq, _qt){
  var collisions = []
  _qt.get(_sq, function(_obj){
    GLOBAL_COUNT += 1
    if(_sq.name != _obj.name){
      // console.log('!', _obj)
      collisions.push(_obj.name)
    }
    return true
  })
  return collisions
}

function testColliding(){
  for(var x=0; x<120; x++){
    colliding(sq1, qt);
  }
  return
}

function ifs(dec, limit){
  if(dec < limit){
    ifs(dec-1, limit)
  }
  return
}

function timeFunc2(funcPromise){
  console.log('starting timer')
  console.time('test')
  funcPromise.then(function(){
    console.timeEnd('test')
    console.log('done')
    return
  })
}

function timeFunc(limit, func){
  console.log('starting timer')
  console.time('test')
  func()
  while(true){
    if(GLOBAL_COUNT >= limit){
      console.log('done', GLOBAL_COUNT)
      console.timeEnd('test')
      return
    }
  }
}



// timeFunc(10000, testColliding)
// timeFunc2(new Promise(function(fulfill, reject){
//   return fulfill(testColliding())
// }))
