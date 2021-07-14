import styled from "styled-components";


interface PopupThingProps {
    isVisible: boolean;
}

export const NuiWrapper = styled.div`
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PopupThing = styled.div<PopupThingProps>`
    visibility = ${(props) => props.isVisible ? 'visible' : 'hidden'};

    width: 500px;
    height: 500px;
    background: black;
`;