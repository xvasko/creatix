import styled from 'styled-components';

export const Ul = styled.ul`
    list-style: none;
    padding: 0px;
    
    li {
        height: 60px;
        border: 1px solid black;
        margin-bottom: 10px;
        font-family: sans-serif;
        border-color: #2d2d2d;
        background-color: #1C1C1F;
        color: grey;
        
        img {
            float: left;
        }
        span{
            float: left;
            margin-top: 22px;
            padding-left: 8px;
            font-style: italic;
        }
        strong {
            color: white;
            font-style: normal;
            margin-right: 10px;
        }
    }
`;