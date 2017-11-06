import styled from 'styled-components';

export const Ul = styled.ul`
    padding: 0px;
    list-style: none;
    
    li {
        font-family: sans-serif;
        font-size: 16px;
        color: gray;
        margin-bottom: 4px;
        line-height: 24px;
        
        a {
            transition: color 0.3s ease;
            color: #801919;
            text-decoration: none;
            font-size: 24px;
            margin-left: 16px;
        }
        a:hover {
            transition: color 0.3s ease;
            color: #670c0cf2;
        }
    }
    li::before {
      content: "• ";
      color: #212121;
      margin-right: 10px;
    }
`;

export const H2 = styled.h2`
    color: white;
    font-family: sans-serif;
`;

export const Div = styled.div`
    a {
        font-family: sans-serif;
        transition: color 0.3s ease;
        color: white;
        text-decoration: none;
    }
    a:hover {
        transition: color 0.3s ease;
        color: #4c4949;
    }
`;