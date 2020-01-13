import React from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Planets = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                {
                                    !!context.store.planets.results &&
                                    context.store.planets.results.map((item, i) => {
                                        const id= item.url.slice(29);
                                        return (
                                            <div className="col-md-4" key={i}>
                                                <div class="card">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnUIMNqHslpEUx4uczbej82Ei2LsDVDJllc760D8Zp0AsS517&s300X200" class="card-img-top" alt="foto" />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{item.name}</h5>
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <Link to={"/planets/" + id} className="btn btn-primary">Vea más información</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>

                    )
                }

            }
        </Context.Consumer >
    )
}
export default Planets;