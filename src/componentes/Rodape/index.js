import './Rodape.css';

const Rodape = ()=> {

    return(
       
            <footer className='footer'>
                <div>
                    <ul className='footer__icones'>
                        <li className='icones'><img src="./imagens/fb.png" alt="facebook" /></li>
                        <li className='icones'><img src="./imagens/tw.png" alt="twitter"/></li>
                        <li className='icones'><img src="./imagens/ig.png" alt="Instagram"/></li>

                    </ul>
                </div>
                <div>
                    <img src="./imagens/logo.png" alt=""/>
                </div>
                <div>
                    <h4 className='titulo__rodape'>Desenvolvido por Alura.</h4>
                </div>

            </footer>
      
    )
}

export default Rodape;