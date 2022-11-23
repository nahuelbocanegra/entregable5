import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const pokemonLi = ({ url }) => {
    const[character,setCharacter]=useState({})
    const [color,setColor]=useState("")
    useEffect(() => {
        axios(url).then(res => { setCharacter(res.data) })
     
    })
    const background =()=>{
        if(character.types?.[0].type.name==="fire"){
            return "linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)"
        }else if(character.types?.[0].type.name==="water" ){
            return "linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)"
        }else if(character.types?.[0].type.name ==="normal" ){
            return "gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)"
        }else if(character.types?.[0].type.name ==="grass" ){
            return "linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)"
        }else if(character.types?.[0].type.name ==="bug" ){
            return "linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)"

        }else if(character.types?.[0].type.name ==="poison" ){
            return "linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)"

        }
        else if(character.types?.[0].type.name ==="fighting" ){
            return "linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)"

        }else if(character.types?.[0].type.name ==="ground" ){return "linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)"}
        else if(character.types?.[0].type.name ==="rock" ){
           return "linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)"
        }else if(character.types?.[0].type.name ==="ghost" ){
           return "linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)"
            
        }else if(character.types?.[0].type.name ==="steel" ){
          
            return "linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)"
        }else if(character.types?.[0].type.name ==="electric" ){
          
            return "linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)"
        }else if(character.types?.[0].type.name ==="ice" ){
          
            return "linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)"
        }else if (character.types?.[0].type.name ==="dragon"){
           return "linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)"
        }else if (character.types?.[0].type.name ==="dark"){
           return "linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)"
        }else{
            return "linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)"
        }

    }
    return (
        <Link className='link-pokemon' to={`/Pokedex/${character.id}`}  style={{background:background()}}>
               <div className='link-one'>
                
               </div>
                
            <div className='link-two'>
                    <img className="card-img" src={character.sprites?.other.dream_world.front_default} alt="" />
                    <h3 className='link name'>{character.name}</h3>
                <p className='link tipe'>{character.types?.[0].type.name}/{character.types?.[1]?.type.name}</p>
                <h4 className='link tipe-one'>Tipo</h4>
            </div>
            
            
           
            
        </Link>
        
    );
};

export default pokemonLi;