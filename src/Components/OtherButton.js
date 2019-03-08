import React from 'react';
import styled from 'styled-components';


const OtherButton = (props) => {
    const Button2 = styled(props.button)`
        color: yellow;
        background: maroon;
    `
    return (
        <a href="https://cdn-images-1.medium.com/max/1600/0*vsvLVt-w4WivlTOn.jpg" target="_blank"  >

        <Button2 >Yeet</Button2>

        </a>

    )
}

export default OtherButton;