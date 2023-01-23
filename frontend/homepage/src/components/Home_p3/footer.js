import React from 'react'
import Footer from './styles'

// import image from 'https://drive.google.com/file/d/1uSh9TSQ5zskRJzQCQK7LAFLvhhhG86cc/view?usp=sharing'
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>

                    
                    <Footer.Column>
                    {/* <img src={image} /> */}
                         
                        
                         <Footer.Title><div>Heritians</div></Footer.Title>
                         
                        <Footer.Link><i className="fa fa-map-pin" aria-hidden="true" style={{display: "inline-block", height: 30, width: 13,}}></i>VIT Bhopal University</Footer.Link>
                        
                        <Footer.Link>Bhopal-Indore Highway</Footer.Link>
                        <Footer.Link>Sehore,Madhya Pradesh</Footer.Link>
                    </Footer.Column>
                <Footer.Row style = {{width:40+"%", justifyContent:"space-between"}}>    
                    <Footer.Column>
                        <Footer.Title>Quick Links</Footer.Title>
                        <Footer.Link href="#">Gallery</Footer.Link>
                        <Footer.Link href="#">Homepage</Footer.Link>
                        <Footer.Link href="#">Explore Villages</Footer.Link>
                        <Footer.Link href="frontend\homepage\src\components\Pages \ourTeamPage\OurTeam.js">About Us</Footer.Link>
                        <Footer.Link href="#">Our Team</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Media</Footer.Title>
                        <Footer.Link href="#">Facebook</Footer.Link>
                        <Footer.Link href="#">Instagram</Footer.Link>
                        <Footer.Link href="#">LinkedIn</Footer.Link>
                        <Footer.Link href="#">Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>    
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>

    )
}