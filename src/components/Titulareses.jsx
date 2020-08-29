import React from 'react'
import { connect } from 'react-redux'

const Titulares = ({titulares,quitarTitular}) => (
    <section>
        <h2> Titulares </h2>
        <div className="titulares">
            {
                titulares.map(titular => (
                    <article className="titular" key="titular.id">
                        <div>
                            <img src={titular.photo} alt={titular.name} />
                            <button onClick={()=>quitarTitular(titular)}>X</button>
                        </div>
                        <p>{titular.name}</p>
                    </article>    
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    titulares: state.titulares
});

const mapDispatchToProps = dispatch => ({
    quitarTitular(jugador) {
        dispatch({
            type: "QUITAR_TITULAR",
            jugador
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);
