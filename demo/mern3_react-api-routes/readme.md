## ROUTER
#### app.js
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
```   
<Route path="/about" element={<About />} />
```

4. v5: can add the keyword "exact" for exact match
5. v6: "exact" is not needed. 


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