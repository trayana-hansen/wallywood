import styled from 'styled-components'

export const ContainerStyle = styled.section `
background-color: ${props => props.theme.colors.light};
height: 100vh;
width: 100%;
max-width: ${props => props.maxwidth}px;
margin: 0 auto;
padding: 1rem 2.3rem;


`
