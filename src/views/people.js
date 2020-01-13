import React from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const People = () => {
    return (
        <Context.Consumer>
            {
                (context) => {
                    return (
                        <div className="container">
                            <div className="row">
                                {
                                    !!context.store.people.results &&
                                    context.store.people.results.map((item, i) => {
                                        const id = item.url.slice(28);
                                        return (
                                            <div className="col-md-4" key={i}>
                                                <div className="card">
                                                    <img src="https://mba.americaeconomia.com/sites/mba.americaeconomia.com/files/styles/article_main_image/public/field/image/starwars.jpg?itok=1sg42jw5300X200" className="card-img-top" alt="foto" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <Link to={"/perfiles/" + id} className="btn btn-primary">Vea más información</Link>
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

export default People;