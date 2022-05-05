import React from 'react'
import styled from 'styled-components'
import { AiOutlineHome,AiOutlineContacts,AiOutlineBarChart,AiOutlineUser } from "react-icons/ai";
import { useState } from 'react/cjs/react.production.min';

function Navbar() {
const [nav, setNav] = useState(false)

const OpenNav  = setNav(!nav)

  return (
    <Container>


        <Navbars>
            <NavChild>
               <AiOutlineHome color='white' fontSize='2rem'/><span>Home</span>  
            </NavChild>

            <NavChild>
                <AiOutlineUser color='white' fontSize='2rem'/> <span>About</span> 
            </NavChild>

            <NavChild>
                <AiOutlineBarChart color='white' fontSize='2rem'/><span>Skills</span>  
            </NavChild>

            <NavChild>
                <AiOutlineContacts color='white' fontSize='2rem'/> <span>Contacts</span>  
            </NavChild>

        </Navbars>

    </Container>
  )
}

export default Navbar


const Container= styled.div`
    position: fixed;
height: 100vh;
flex-direction: column;
justify-content: center;
top: 15rem;
z-index: 1000;
`;

const Navbars= styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
${nav ? "" : ""}

`;

const NavChild= styled.li`

    list-style: none;
   
    cursor: pointer;
    display: flex;
    border-radius:100px;
    background:#ff0066 ;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin: 10px 0px;
    transition: all 0.3s  ;
   padding: 2px 5px;
   z-index: 100;

   :hover{
       width: 100px;
    

   }

   span{
       display:none;
       color: white;
    font-size: 1.4rem;
    position: relative;
       
   }
  :hover span{
      display:block;
      
  }




`;

