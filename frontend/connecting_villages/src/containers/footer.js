import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
              
                <Footer.Column>
                <Footer.Title>Quick Links</Footer.Title>
                    <Footer.Link href="#">Gallery</Footer.Link>
                    <Footer.Link href="#">Homepage</Footer.Link>
                    <Footer.Link href="#">Explore Villages</Footer.Link>
                    <Footer.Link href="#">About Us</Footer.Link>
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
            </Footer.Wrapper>
        </Footer>
    )
}