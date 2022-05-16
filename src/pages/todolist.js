import { BrowserRouter as Link } from 'react-router-dom';
export default function TodoList() {
    return (
        <div>
            <h1>Liste !</h1>
            <Link to={'/ajout'} >Ajouter</Link>
        </div>
    )
}