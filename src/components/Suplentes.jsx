import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({suplentes,quitarSuplente}) => (
    <section>
        <h2> Suplentes </h2>
        <div className="suplentes">
            {
                suplentes.map(suplente => (
                    <article className="suplente"  key="suplente.id">
                        <div>
                            <img src={suplente.photo} alt={suplente.name} />
                            <button onClick={()=>quitarSuplente(suplente)}>X</button>
                        </div>
                        <p>{suplente.name}</p>
                    </article>    
                ))
            }
        </div>
    </section>
);

const mapStateToProps = state => ({
    suplentes: state.suplentes
});

const mapDispatchToProps = dispatch => ({
    quitarSuplente(jugador) {
        dispatch({
            type: "QUITAR_SUPLENTE",
            jugador
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Suplentes);
