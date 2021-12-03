# 1. Rules of Hooks
## "Only call hooks at the Top level"
Don't call Hooks inside loops, conditions, or nested functions 

## "Only call hooks from React Functions"
Call them from within React functional components and not just any regular javascript function

# 2. useState Hook
- The useState hook lets you add state to functional components. 
- In class, the state is always an object
- With the useState hook, the state doesn't have to be an object
- The useState hook returns an array with 2 elements
- The first element is the current value of the state, and the second element is a state setter function
- New state value depends on the previous state value? You can pass a function to the setter function. The function will receives previous state value as its argument
- When dealing with objects or arrays, always make sure to spread your state value, then update the state value.
## 2.1 If the new state is computed using the previous state, you can pass a function to setState. The function will receive the previous value, and return an updated value. https://reactjs.org/docs/hooks-reference.html#usestate
```
const [counter, setCounter] = useState(0)
setCounter(prevCount => prevCount + 1)
```
when use the for loop and setter function (asynchronous function)
- the for loop will be executed first very fast. And when for loop is executed, the setter function is evaluated and put into an 'event que' that will be executed asynchronously. The count value is 0 when the setter functions (5 times) are evaluated. This is why count value won't increase. 
for (let i = 0; i < 5; i++){
    setCount(count + 1)   // count value is always 0 when runtime evaluates the setter function, then put it to 'event que'
}

- When update state value based on previous state value, always go with safer option of passing in a function has access to the previous state value to the state setter function.
for (let i =0; i < 5; i++){
    setCount(prevCount => prevCount + 1)
}

## 2.2 state setter function provided by useState hook does not automatically merge and update object. You have to merge it manually (use spread operator ...) and pass it to setter function
### 2.2.1 Object
```
const [name, setName] = useState({firstName: '', lastName:''})
<input
    type="text"
    value={name.firstName}
    onChange={(e) => setName({...name, firstName: e.target.value})}
/>
```
### 2.2.2 Array
```
const [items, setItems] = useState([])
const addItem = () => {
    setItems([
        ...items,
        {
            id: items.length,
            value: Math.floor(Math.random() * 10 + 1)
        }
    ])
}
```
# 3. useEffect Hook
The Effect Hook lets you perform side effects in functional components 
It is a close replacements for componentDidMount, componentDidUpdate and componentWillUnmount
## 3.1 One react functional component could have multiple useEffect() hooks

## 3.2 The 2nd parameter of useEffect() function, condition array, does <strong>NOT</strong> mean when to run the useEffect(), but to tell react what need to be monitored for running useEffect(). Be careful when you use a empty [] as condition array for useEffect Hook.
So a good practice is that define function(s) that will be called inside useEffect() inside the useEffect(), will help to identify the 'conditions'
```
const [count, setCount] = useState(0);
useEffect(()=>{
    const tick = ()=>{
        setCount(prevCount + 1);
    }
    const interval = setInterval(tick, 1000);
    return ()=>{
        cleanInterval(interval);
    }
}, [count])
```
