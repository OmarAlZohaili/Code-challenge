// i was trying to make an interface for the warning we get when we try to add new property.
//   interface errorEncounter {a:{
// 	 b:{
// 		 _id: string,
//  		 name: string,
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 	 }
// 	 c: string,
//   }, value: string,
//  }
// base obj before update
var obj = {
    a: {
        b: [
            { _id: '5dc0ad700000000000000000', name: 'asdf1' },
            { _id: '5dc0ad700000000000000001', name: 'asdf2' },
            { _id: '5dc0ad700000000000000002', name: 'asdf3' }
        ]
    },
    value: 'hui'
};
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1. apply update / change array object:
// i used .filter() to find the requird id that needs to be updated, .map() could also been used.
var updatedObj = obj.a.b.filter(function (objectId) { return objectId._id === "5dc0ad700000000000000000"; })[0];
if (updatedObj) {
    // i set a new property value equals to name, then edited value and delted name (since the task is to update it and not delete it and creat a new prop)
    updatedObj.title = updatedObj.name;
    updatedObj.title = "asdf1-updated";
    delete updatedObj.name;
    //console.log(updatedObj);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. apply update / change array value:
//in here i went inside obj.a.b and used forEach loop to find the id i am looking for. PS: titleVaue is highlighted because with TS we cant modify or add a property to an obj that has already been defined. we can use "any" type, but its dirty coding and might ignore any future bugs. 
obj.a.b.forEach(function (object) {
    if (object._id === '5dc0ad700000000000000000') {
        object.titleValue = "asdf1-updated ";
    }
});
//console.log(obj.a.b);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. add an array entry:
// i defined the new array we needed to add
var newArray = { "_id": "5dc0ad700000000000000003", "name": "co2" };
// i used .push function to add the array to the end of the obj
obj.a.b.push(newArray);
//console.log(obj.a.b);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4. remove array entry:
// i used mapping to render through the arr and get get the index of our obj which has the specified _id
var removedArray = obj.a.b.map(function (item) { return item._id; }).indexOf('5dc0ad700000000000000001');
// i used splice with index removedArray to remove 1 element.
obj.a.b.splice(removedArray, 1);
//console.log(obj.a.b);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. add regular object value
// i called Object.assign method and i didnt add {} as the first object because we needed to change the object in the next task :)
var regObj = Object.assign(obj.a, { c: "hello" });
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6. update regular object value
// i edited the property c using dot notation.
// again getting warning that the property didnt exit, but the code is still working 
obj.a.c = "hallo-changed";
//console.log(obj.a);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7. unset regular object value on root level
// i used delete operator to delete the property value form obj
delete obj.value;
// we can also remove the property dynamicaly by key:
var remove = obj["value"], rest = __rest(obj, ["value"]);
// console logged rest to see what is left (rest can be called anythiing we want, its everything left other than value)
console.log(rest);
//console.log(obj);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 8. unset regular object value NOT on root level
// used the same method as the step before.
delete obj.a.b;
console.log(obj);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 9. multiple operations at one time
