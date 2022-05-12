# React Notes
1. [Create React Project](#create-react-project-react-18--router-v6)
2. [Forms](#forms)
3. [Axios & useEffect](#grab-api-axios)
4. [Router v5 v6 comparison](#router)
5. [Router - redirect](#to-redirect)


## Create React Project (React 18 & router v6)
1. npx create-react-app your-project-name
2. go into the project, install dependencies (npm install axios react-router-dom)
3. npm start (to make sure the server is running)
4. Understand the components you need. Create all the components (rafce for the backbone of the components)
	- create /views folder and /components folder
	- views are the parent companents for each wireframe, components are the children components
5. start changing App.js to display components

[Top](#react-notes)

## FORMS
### INPUT
1. import useState
2. add state variable for the input  ``` const [name, setName] =  useState("")```
3. onChange for the input ``` onChange = {e=> setName(e.target.value)}```

### SUBMIT
3. add handleSubmit  (with e.preventDefault())
4. attach eventHandler : ``` onSubmit = { submitHandler }``` for form tag

[Top](#react-notes)

### Grab API (axios)
```js
axios.get(`URL`)
	.then(res=> {
		//successful, work with the res (most of the time, we need res.data)
	})
	.catch(err=>{
		//unsuccessful , got the error in the URL
	})
```

### useEffect (trigger the function when the page loads)
```js
useEffect(()=>{
	// whatever you want to do when the page is loaded
},[a, b, c, ])
```
If any of the variables (a, b, c in this example) inside the array changed, useEffect will re-run

[Top](#react-notes)


## ROUTER
#### app.js
1. Link -- similar to a tag ```<Link to ="/about"> About </Link>  ```
2. Switch(v5), Routes(v6) -- if/else statement.. if it fits the first, go to the first
3. Route -- if the path fits, render the component

v5:
```js
<Route exact path="/about">  
	<About />  
</Route>
```

v6:
```js   
<Route path="/about" element={<About />} />
```

4. v5: can add the keyword "exact" for exact match
5. v6: "exact" is not needed. 


v5

```js
import {BrowserRouter, Link, Switch, Route } from "react-router-dom"

	<BrowserRouter>
		<Link to ="/about"> About </Link>  
		<Switch>  
			<Route exact path="/about">  
				<About />  
			</Route> 
			<Route path="/:keyword">  
				<Keyword />  
			</Route> 
		</Switch>
	</BrowserRouter>
```

v6

```js
import {BrowserRouter, Link, Routes, Route } from "react-router-dom"

	<BrowserRouter>
		<Link to ="/about"> About </Link>  
		<Routes>  
                    <Route path="/about" element={<About />} />
                    <Route path="/:keyword" element={<Keyword />} />
		</Routes>
	</BrowserRouter>
```

#### To redirect  
1. import the dependency (v5:  useHistory , v6:  useNavigate)

v5: ```import {useHistory} from "react-router-dom" ```

v6: ``` import { useNavigate} from "react-router-dom" ```

2. instantiate inside the function before return 

v5: ``` const history = useHistory() ```

v6: ``` const navigate = useNavigate() ```

3. to redirect, use history.push("url") (v5) or navigate("url")

v5: ``` history.push(`REDIRECT URL`) ```

v6: ``` navigate(`REDIRECT URL`) ```

4. To go back to the last page

v5: ``` history.goBack() ```

v6: ``` navigate(-1) ```

[Top](#react-notes)