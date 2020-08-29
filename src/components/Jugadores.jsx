import React from 'react'
import { connect } from 'react-redux'

const Jugadores = ({jugadores,hacerTitular,hacerSuplente}) => (
    <section>
        <h2> Jugadores </h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(jugador => (
                    <article className="jugador" key="jugador.id">
                        <img src={jugador.photo} alt={jugador.name} />
                        <h3>{jugador.name}</h3>
                        <div>
                            <button onClick={()=>hacerTitular(jugador)}>Titular</button>
                            <button onClick={()=>hacerSuplente(jugador)}>Suplente</button>
                        </div>
                    </article>    
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    jugadores: state.jugadores
});

const mapDispatchToProps = dispatch => ({ 
    hacerTitular(jugador) {
        dispatch({
            type: "HACER_TITULAR",
            jugador
        });
    },
    hacerSuplente(jugador) {
        dispatch({
            type: "HACER_SUPLENTE",
            jugador
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores);
