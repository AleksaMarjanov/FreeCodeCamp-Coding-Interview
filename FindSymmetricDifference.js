function sym(...args) {
    // Using spread operator to destructure all of the given arrays
    //Set creates a new object and method add to insert a new element of speicifed value
    // Removes an element of associated value
    // similar to include method on arrays but faster
    return [...args.reduce(reducer, new Set())]
  }

  /**   First we create compare Set which will hold our current Array of items
    We can iterate over a Set using a for ...of loop, similar to an array. 
    If our accumulator Set has the item, we delete it. If not, we add it.
    We do this with each array in the array of arrays,
    adding and removing values from our accumulator Set until we’ve iterated through all of our arrays, and each of the values inside of them.
    The reducer function will return out our accumulated Set. We then just use the spread operator to convert it back into an array.
*/

  function reducer (result, arr) {
    const compare = new Set(arr)
    for(let val of compare) {
        if(result.has.val) {
            result.delete(val)
        } else {
            result.add(val)
        }
    }
    return result;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);