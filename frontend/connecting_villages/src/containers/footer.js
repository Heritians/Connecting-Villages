import React from 'react'
import Footer from '../components/footer'
import './footer.css'
// import image from 'https://drive.google.com/file/d/1uSh9TSQ5zskRJzQCQK7LAFLvhhhG86cc/view?usp=sharing'
export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>

                    <div className='Column1'>
                    <Footer.Column>
                    {/* <img src={image} /> */}
                         <br></br>
                         <br></br>
                        <Footer.Link>VIT Bhopal University</Footer.Link>
                        <br></br>
                        <Footer.Link>Bhopal-Indore Highway</Footer.Link>
                        <Footer.Link>Sehore,Madhya Pradesh</Footer.Link>
                    </Footer.Column>
                    </div>

                    <Footer.Column className = 'Column2'>
                        <Footer.Title>Quick Links</Footer.Title>
                        <Footer.Link href="#">Gallery</Footer.Link>
                        <Footer.Link href="#">Homepage</Footer.Link>
                        <Footer.Link href="#">Explore Villages</Footer.Link>
                        <Footer.Link href="#">About Us</Footer.Link>
                        <Footer.Link href="#">Our Team</Footer.Link>
                    </Footer.Column>
                    <Footer.Column className = 'Column3'>
                        <Footer.Title>Media</Footer.Title>
                        <Footer.Link href="#">Facebook</Footer.Link>
                        <Footer.Link href="#">Instagram</Footer.Link>
                        <Footer.Link href="#">LinkedIn</Footer.Link>
                        <Footer.Link href="#">Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
            <div style={{paddingTop:80}}>
            <hr className='line'></hr>
            </div>
        </Footer>

    )
}