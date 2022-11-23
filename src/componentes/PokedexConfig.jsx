import React from 'react';

const PokedexConfig = () => {
    return (
        <div className='confi'>
            <div className='container-confi'>
                <div>
                   
                    <button><i class='bx bx-sun'></i></button>
                </div>
                <div>
                    <h2>Numero de pokemones por pagina</h2>
                    <select name="" id="">
                    <option value="">2</option>
                    <option value="">4</option>
                    <option value="">8</option>
                    <option value="">10</option>
                    <option value="">20</option>
                </select>
                </div>
            </div>
        </div>
    );
};

export default PokedexConfig;