## ROUTER
#### app.js
v5

```
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

```
import {BrowserRouter, Link, Routes, Route } from "react-router-dom"

	<BrowserRouter>
		<Link to ="/about"> About </Link>  
		<Routes>  
            <Route path="/about" element={<About />} />
            <Route path="/:keyword" element={<Keyword />} />
		</Routes>
	</BrowserRouter>
```


1. Link -- similar to a tag 
2. Switch(v5), Routes(v6) -- if/else statement.. if it fits the first, go to the first
3. Route -- if the path fits, render the component
v5:
```
			<Route exact path="/about">  
				<About />  
			</Route>
```

v6:
```   <Route path="/about" element={<About />} />
```

4. v5: can add the keyword "exact" for exact match
5. v6: "exact" is not needed. 