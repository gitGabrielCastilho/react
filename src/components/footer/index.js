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
                        <li><SiFacebook /> <a className="redesocial" href="https://facebook.com/" 
                        target={"_blank"} rel="noopener noreferrer" >Facebook</a></li>

                        <li><SiInstagram /><a className="redesocial" href="https://instagram.com/" 
                        target={"_blank"} rel="noopener noreferrer">Instagram</a></li>

                        <li><SiPinterest /><a className="redesocial" href="https://pinterest.com/" 
                        target={"_blank"} rel="noopener noreferrer">Pinterest</a></li>

                        <li><SiTwitter /><a className="redesocial" href="https://twitter.com/" 
                        target={"_blank"} rel="noopener noreferrer">Twitter</a></li>
                    </ul>

                </div>
            </div>
                
        </FooterArea>
    )
}

export default Footer;