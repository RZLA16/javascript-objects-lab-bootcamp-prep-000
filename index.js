var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
return Object.assign(recipes, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object
}

function deleteFromObjectByKey(object, key){
  object = [key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
