import { Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import User from './User';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Signup />}/>
            <Route path='/user' element={<User />}/>
        </Routes>
    )
}

export default App;