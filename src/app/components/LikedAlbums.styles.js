import styled from 'styled-components';

export const Ul = styled.ul`
    list-style: none;
    padding: 0px;
    
    li {
        height: 60px;
        border: 1px solid #121314;
        margin-bottom: 10px;
        font-family: sans-serif;
        transition: background-color 0.3s ease;
        background-color: #1C1C1F;
        color: grey;
        
        img {
            float: left;
        }
        span{
            float: left;
            margin-top: 22px;
            padding-left: 20px;
            font-style: italic;
        }
        strong {
            color: white;
            font-style: normal;
            margin-right: 20px;
        }
    }
    li:hover {
        transition: background-color 0.3s ease;
        background-color: #4c4949;
    }
`;

export const H2 = styled.h2`
    color: white;
    font-family: sans-serif;
`;