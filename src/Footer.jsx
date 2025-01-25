import './Estilos/Footer.css';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container text-center">
                <h3 className="mb-3">Solicitá una visita... Acercate a nosotros, <br/>¡dejá que seamos amigos!</h3>
                <div>
                    <a href="mailto:inmobiliariaporcellp@gmail.com" className="btn btn-outline-light mx-2">Contactanos</a>
                    <a href="tel:+549 221 575-7300" className="btn btn-outline-light mx-2">Llamar</a>
                </div>
                <p className="mt-4 mb-0">© 2025 Tu Empresa. Todos los derechos reservados.</p>
                <a href="mailto:gabrielfernando075puig@gmail.com">Created by Gabriel F. Puig</a>
            </div>
        </footer>
    );
}

export default Footer;
