import './NavToo.css'

export default function NavToo(props){
    return(
        <nav className='navTool'>
            <h1>Barra de navegação</h1>
            <ul>
                <li><a href="#">Primeira seção</a></li>
                <li><a href="#">Segunda seção</a></li>
                <li><a href="#">Terceira seção</a></li>
                <li><a href="#">Quarta seção</a></li>
                <li><a href="#">Quinta seção</a></li>
            </ul>
        </nav>
    )
}