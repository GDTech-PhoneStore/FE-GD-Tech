import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Details, Home } from './pages';

// function App() {
//   return (
//       <Home />
//   );
// }
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="users/:id" element={<Details />} />
		</Routes>
	</BrowserRouter>
);

export default App;
