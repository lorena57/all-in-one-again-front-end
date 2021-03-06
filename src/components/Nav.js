import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link to="/">All in<span>One</span></Link>
            </h1>
            <ul>
                <li>
                    <Link to="/contacts">Contacts  <span>/</span></Link>
                </li>

                <li>
                    <Link to="/groceries">Shopping  <span>/</span></Link>
                </li>

                <li>
                    <Link to="/notes">Notes</Link>
                </li>
            </ul>
        </StyledNav>
    )

};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    a {
        color: black;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 1.0rem;
        position: relative;
    }
    span {
        position: relative;
        padding-left: 0.5rem;
        color: black;
    }
    h1 span {
        color: #2554C7;
    };
h1 span {
    // color: #2673ed;
    color: #2554C7;
}

span {
    position: relative;
    padding-left: 0.5rem;
    color: #2673ed;
}`

export default Nav;