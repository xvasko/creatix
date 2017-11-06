import styled from 'styled-components';

export const Ul = styled.ul`
    padding: 0px;
    list-style: none;
    
    li {
        margin-bottom: 10px;
        font-family: sans-serif;
        a {
            transition: color 0.3s ease;
            color: white;
            text-decoration: none;
        }
        a:hover {
            transition: color 0.3s ease;
            color: #4c4949;
        }
    }
    li::before {
      content: "• ";
      color: #263238;
      margin-right: 10px;
    }
`;