

// I made an interface with any type so we can add different types of properties to our objs
interface errorContainer  {
	[key: string]: any; 
} 


// base obj before update, i added the interface we made (errorContainer)
let obj: errorContainer = {
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
// PS: i had to use any with objectId since we are using .filter() function otherwise it showed an error with our interface
let updatedObj = obj.a.b.filter((objectId: any) => objectId._id === "5dc0ad700000000000000000")[0];

if (updatedObj){
	// i set a new property value equals to name, then edited value and delted name (since the task is to update it and not delete it and creat a new prop)
	updatedObj.title = updatedObj.name;
	updatedObj.title = "asdf1-updated";
	delete updatedObj.name;
	//console.log(updatedObj);
}





//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2. apply update / change array value:

//in here i went inside obj.a.b and used forEach loop to find the id i am looking for. i used any again like the previos example becaue we are looking for specif _id and with interface it looks for any.
obj.a.b.forEach(function(object: any) {
    if (object._id === '5dc0ad700000000000000000') {
        object.titleValue = "asdf1-updated ";
        
       
    }
}); 
//console.log(obj.a.b);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3. add an array entry:

// i defined the new array we needed to add
let newArray = { "_id": "5dc0ad700000000000000003", "name": "co2" };
// i used .push function to add the array to the end of the obj
obj.a.b.push(newArray)

//console.log(obj.a.b);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4. remove array entry:

// i used mapping to render through the arr and get get the index of our obj which has the specified _id
let removedArray = obj.a.b.map(function(item: any) { return item._id; }).indexOf('5dc0ad700000000000000001');
// i used splice with index removedArray to remove 1 element.
obj.a.b.splice(removedArray, 1);

//console.log(obj.a.b);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 5. add regular object value

// i called Object.assign method and i didnt add {} as the first object because we needed to change the object in the next task :)
let regObj: any = Object.assign(obj.a, {c: "hello"});




//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 6. update regular object value

// i edited the property c using dot notation.
obj.a.c = "hallo-changed";
//console.log(obj.a);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 7. unset regular object value on root level

// i used delete operator to delete the property value form obj
delete obj.value;

// we can also remove the property dynamicaly by key:
 let { ["value"]: remove, ...rest} = obj;

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

// for this task i created new object with same props of obj for the sake of testing
let secondObj: errorContainer = {
	a: {
		b: [
			{ _id: '5dc0ad700000000000000000', name: 'asdf1' },
			{ _id: '5dc0ad700000000000000001', name: 'asdf2' },
			{ _id: '5dc0ad700000000000000002', name: 'asdf3' }
		]
	},
	value: 'hui'
};

// used delete directly to delete value
delete secondObj.value;

// i added both something to the root  and c inside of a in both ways using [] and dotting.
secondObj["something"] = "anything";
secondObj.a.c = "hallo"

//console.log(secondObj)
	

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 10. apply array update and create underyling array or object

// i will use secondObj for this task
//i set x as an empty array in secondObj, and then pushed "asdfx" to it. 
secondObj.x = [];
secondObj.x.push("asdfX")

// at first i set up v in secondOBJ and defined it immiditly with x and m before noticing the comments in the md file
//secondObj.v = {x: ["asdfV"], m: {l: "asdf-val" }}

// i created new object x with its value
let objectX = {
	x: ["asdfV"], 
}
// secongOj.v was set as object x (v was created automatically)
secondObj.v = objectX

//same thing happend here as previos step but inserted object i into secondObj.v.m (m was created automatically)
let objectI = {
	l: "asdf-val"
}
secondObj.v.m = objectI

//console.log(secondObj)


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 11. apply user image updatess

let thirdObj: errorContainer = {
	a: {
		b: [
			{ _id: '5dc0ad700000000000000000', name: 'asdf1' },
			{ _id: '5dc0ad700000000000000001', name: 'asdf2' },
			{ _id: '5dc0ad700000000000000002', name: 'asdf3' }
		]
	},
	value: 'hui',
	images: {
		thumbnail: 'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573477587288.jpg',
		small: 'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573477587288.jpg',
		medium: 'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573477587288.jpg',
		large: 'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573477587288.jpg',
		xlarge: 'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573477587288.jpg'
	}
};

// defined the new properties as updatedImgs
let updatedImgs = {
	thumbnail: "http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg",
	small: "http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg",
	medium: "http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg",
	large: "http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg",
	xlarge: "http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg"
}
// updated thirObj.images to the new images we defined above.
thirdObj.images = updatedImgs



console.log(thirdObj)