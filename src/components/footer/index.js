import {SiFacebook, SiTwitter, SiPinterest, SiInstagram} from "react-icons/si";
import React from "react";
import {FooterArea} from './styled'; 





export const Footer = () => {
    return (
        <FooterArea>
            
            <div className='footer'>    
                <div className='footer-text'>
                Todos direitos reservados<br/>
                Me siga nas redes sociais
                </div>
                <div className='footer-img'>
                    <ul>
                        <li><SiFacebook className="facebook redesocial"/> <a href="https://facebook.com/" target={"_blank"} >Facebook</a></li>
                        <li><SiInstagram className="instagram redesocial"/><a href="https://instagram.com/" target={"_blank"}>Instagram</a></li>
                        <li><SiPinterest className="pinterest redesocial"/><a href="https://pinterest.com/" target={"_blank"}>Pinterest</a></li>
                        <li><SiTwitter className="twitter redesocial"/><a href="https://twitter.com/" target={"_blank"}>Twitter</a></li>
                    </ul>

                </div>
            </div>
                
        </FooterArea>
    )
}

export default Footer;