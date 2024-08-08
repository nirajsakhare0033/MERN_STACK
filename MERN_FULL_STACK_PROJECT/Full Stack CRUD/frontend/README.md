# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Providing the complete source code for a full-fledged application like "Car Care Anywhere" is quite extensive. However, I can provide you with a detailed scaffold of the code that includes the basic structure and essential functionalities. You can then expand on it as needed.

### Backend (Node.js and Express.js)

1. **Project Setup**
    - Create a new directory and initialize the project:
    ```sh
    mkdir car-care-anywhere
    cd car-care-anywhere
    npm init -y
    npm install express mongoose dotenv jsonwebtoken bcrypt cors
    ```
    

2. **Server Setup (`server.js`)**
    ```js
    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    require('dotenv').config();

    const app = express();
    app.use(express.json());
    app.use(cors());

    const PORT = process.env.PORT || 5000;

    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.log(err));

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    ```

3. **Models**
    - **User Model (`models/User.js`)**
    ```js
    const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
      name: String,
      email: { type: String, unique: true },
      password: String,
      role: { type: String, enum: ['user', 'mechanic'], default: 'user' },
      location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true },
      },
    });

    userSchema.index({ location: '2dsphere' });

    module.exports = mongoose.model('User', userSchema);
    ```

    - **Service Request Model (`models/ServiceRequest.js`)**
    ```js
    const mongoose = require('mongoose');

    const serviceRequestSchema = new mongoose.Schema({
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      mechanicId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      status: { type: String, enum: ['pending', 'accepted', 'completed'], default: 'pending' },
      description: String,
      location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true },
      },
    });

    serviceRequestSchema.index({ location: '2dsphere' });

    module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
    ```

4. **Controllers**
    - **Authentication Controller (`controllers/auth.js`)**
    ```js
    const User = require('../models/User');
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');

    exports.register = async (req, res) => {
      const { name, email, password, role, location } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword, role, location });
      await user.save();
      res.status(201).send('User registered');
    };

    exports.login = async (req, res) => {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send('User not found');
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Invalid credentials');
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ token });
    };
    ```

    - **Service Request Controller (`controllers/serviceRequest.js`)**
    ```js
    const ServiceRequest = require('../models/ServiceRequest');

    exports.createRequest = async (req, res) => {
      const { userId, description, location } = req.body;
      const serviceRequest = new ServiceRequest({ userId, description, location });
      await serviceRequest.save();
      res.status(201).send('Service request created');
    };

    exports.getNearbyRequests = async (req, res) => {
      const { coordinates } = req.query;
      const requests = await ServiceRequest.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: JSON.parse(coordinates),
            },
            $maxDistance: 10000, // 10 km
          },
        },
      });
      res.status(200).json(requests);
    };
    ```

5. **Routes**
    - **Authentication Routes (`routes/auth.js`)**
    ```js
    const express = require('express');
    const { register, login } = require('../controllers/auth');
    const router = express.Router();

    router.post('/register', register);
    router.post('/login', login);

    module.exports = router;
    ```

    - **Service Request Routes (`routes/serviceRequest.js`)**
    ```js
    const express = require('express');
    const { createRequest, getNearbyRequests } = require('../controllers/serviceRequest');
    const router = express.Router();

    router.post('/', createRequest);
    router.get('/nearby', getNearbyRequests);

    module.exports = router;
    ```

6. **Add Routes to Server**
    ```js
    const authRoutes = require('./routes/auth');
    const serviceRequestRoutes = require('./routes/serviceRequest');

    app.use('/api/auth', authRoutes);
    app.use('/api/service-requests', serviceRequestRoutes);
    ```

### Frontend (React.js)

1. **Project Setup**
    ```sh
    npx create-react-app car-care-anywhere-client
    cd car-care-anywhere-client
    npm install axios redux react-redux react-router-dom @material-ui/core
    ```

2. **Redux Setup**
    - **Store (`redux/store.js`)**
    ```js
    import { createStore, applyMiddleware, combineReducers } from 'redux';
    import thunk from 'redux-thunk';
    import authReducer from './reducers/authReducer';
    import serviceRequestReducer from './reducers/serviceRequestReducer';

    const rootReducer = combineReducers({
      auth: authReducer,
      serviceRequests: serviceRequestReducer,
    });

    const store = createStore(rootReducer, applyMiddleware(thunk));

    export default store;
    ```

    - **Auth Reducer (`redux/reducers/authReducer.js`)**
    ```js
    const initialState = {
      token: null,
      user: null,
      loading: false,
      error: null,
    };

    const authReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'AUTH_START':
          return { ...state, loading: true, error: null };
        case 'AUTH_SUCCESS':
          return { ...state, token: action.token, user: action.user, loading: false };
        case 'AUTH_FAIL':
          return { ...state, loading: false, error: action.error };
        case 'LOGOUT':
          return { ...state, token: null, user: null };
        default:
          return state;
      }
    };

    export default authReducer;
    ```

    - **Service Request Reducer (`redux/reducers/serviceRequestReducer.js`)**
    ```js
    const initialState = {
      requests: [],
      loading: false,
      error: null,
    };

    const serviceRequestReducer = (state = initialState, action) => {
      switch (action.type) {
        case 'REQUESTS_FETCH_START':
          return { ...state, loading: true, error: null };
        case 'REQUESTS_FETCH_SUCCESS':
          return { ...state, requests: action.requests, loading: false };
        case 'REQUESTS_FETCH_FAIL':
          return { ...state, loading: false, error: action.error };
        default:
          return state;
      }
    };

    export default serviceRequestReducer;
    ```

3. **Actions**
    - **Auth Actions (`redux/actions/authActions.js`)**
    ```js
    import axios from 'axios';

    export const register = (formData) => async (dispatch) => {
      dispatch({ type: 'AUTH_START' });
      try {
        const response = await axios.post('/api/auth/register', formData);
        dispatch({ type: 'AUTH_SUCCESS', token: response.data.token, user: response.data.user });
      } catch (error) {
        dispatch({ type: 'AUTH_FAIL', error: error.response.data });
      }
    };

    export const login = (formData) => async (dispatch) => {
      dispatch({ type: 'AUTH_START' });
      try {
        const response = await axios.post('/api/auth/login', formData);
        dispatch({ type: 'AUTH_SUCCESS', token: response.data.token, user: response.data.user });
      } catch (error) {
        dispatch({ type: 'AUTH_FAIL', error: error.response.data });
      }
    };

    export const logout = () => (dispatch) => {
      dispatch({ type: 'LOGOUT' });
    };
    ```

    - **Service Request Actions (`redux/actions/serviceRequestActions.js`)**
    ```js
    import axios from 'axios';

    export const fetchNearbyRequests = (coordinates) => async (dispatch) => {
      dispatch({ type: 'REQUESTS_FETCH_START' });
      try {
        const response = await axios.get(`/api/service-requests/nearby?coordinates=${JSON.stringify(coordinates)}`);
        dispatch

({ type: 'REQUESTS_FETCH_SUCCESS', requests: response.data });
      } catch (error) {
        dispatch({ type: 'REQUESTS_FETCH_FAIL', error: error.response.data });
      }
    };

    export const createRequest = (formData) => async (dispatch) => {
      dispatch({ type: 'REQUEST_CREATE_START' });
      try {
        const response = await axios.post('/api/service-requests', formData);
        dispatch({ type: 'REQUEST_CREATE_SUCCESS', request: response.data });
      } catch (error) {
        dispatch({ type: 'REQUEST_CREATE_FAIL', error: error.response.data });
      }
    };
    ```

4. **Components**
    - **Login Component (`src/components/Login.js`)**
    ```jsx
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { login } from '../redux/actions/authActions';

    const Login = () => {
      const [formData, setFormData] = useState({ email: '', password: '' });
      const dispatch = useDispatch();

      const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
      };

      return (
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      );
    };

    export default Login;
    ```

    - **Service Request Component (`src/components/ServiceRequest.js`)**
    ```jsx
    import React, { useState } from 'react';
    import { useDispatch } from 'react-redux';
    import { createRequest } from '../redux/actions/serviceRequestActions';

    const ServiceRequest = () => {
      const [formData, setFormData] = useState({ description: '', location: { type: 'Point', coordinates: [] } });
      const dispatch = useDispatch();

      const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
      const handleLocationChange = (coordinates) => setFormData({ ...formData, location: { type: 'Point', coordinates } });
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRequest(formData));
      };

      return (
        <form onSubmit={handleSubmit}>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
          <button type="button" onClick={() => navigator.geolocation.getCurrentPosition(
            position => handleLocationChange([position.coords.longitude, position.coords.latitude])
          )}>
            Get Location
          </button>
          <button type="submit">Submit</button>
        </form>
      );
    };

    export default ServiceRequest;
    ```

### Complete Structure
```
car-care-anywhere
│   server.js
│   .env
├───models
│       User.js
│       ServiceRequest.js
├───controllers
│       auth.js
│       serviceRequest.js
├───routes
│       auth.js
│       serviceRequest.js
car-care-anywhere-client
│   package.json
├───src
│   ├───redux
│   │   ├───actions
│   │   │       authActions.js
│   │   │       serviceRequestActions.js
│   │   ├───reducers
│   │   │       authReducer.js
│   │   │       serviceRequestReducer.js
│   │   └───store.js
│   ├───components
│   │       Login.js
│   │       ServiceRequest.js
│   └───App.js
```

This structure gives you a solid foundation to build your "Car Care Anywhere" project. You can expand upon it by adding more features, refining the user interface, implementing additional security measures, and optimizing the performance.


