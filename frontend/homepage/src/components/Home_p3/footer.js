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
                         
                        <Footer.Link><i className="fa fa-map-pin" aria-hidden="true" style={{display: "inline-block", height: 30, width: 13,}}></i>Unnat Bharat Abhiyan Cell, VIT Bhopal University</Footer.Link>
                        
                        <Footer.Link>Bhopal - Indore Highway</Footer.Link>
                        <Footer.Link>Kothri Kalan Sehore,</Footer.Link>
                        <Footer.Link>Madhya Pradesh, India 466114</Footer.Link>
                    </Footer.Column>
                <Footer.Row style = {{width:40+"%", justifyContent:"space-between"}}>    
                    <Footer.Column>
                        <Footer.Title>Quick Links</Footer.Title>
                        {/* <Footer.Link href="#">Gallery</Footer.Link> */}
                        <Footer.Link href="/">Homepage</Footer.Link>
                        <Footer.Link href="/AboutUs">About Us</Footer.Link>
                        <Footer.Link href="/OurTeam">Our Team</Footer.Link>
                        <Footer.Link href="/ContactUs">Contact Us</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Media</Footer.Title>
                        <Footer.Link href="https://www.facebook.com/UBAVITBhopal/">Facebook</Footer.Link>
                        {/* <Footer.Link href="">Instagram</Footer.Link> */}
                        <Footer.Link href="https://www.linkedin.com/company/ubavitbhopal/?originalSubdomain=in">LinkedIn</Footer.Link>
                        {/* <Footer.Link href="#">Twitter</Footer.Link> */}
                    </Footer.Column>
                </Footer.Row>    
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>

    )
}