const React = require("react")
const Default = require("../default")

function Comment(data) {
    return (
        <Default>
            <main className="px-5 py-4">
                <h1>Reviewing {data.place.name}</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <form method="POST" action={`/places/${data.place.id}/comment`}>
                            <div className="form-group col-sm-6">
                                <label htmlFor="author" className="form-check-label">Author</label>
                                <input
                                    className="form-control"
                                    id="author"
                                    name="author"
                                    type="text"
                                    defaultValue="Anonymous"
                                    required />
                            
                                <label htmlFor="content" className="form-check-label">Review</label>
                                <textarea
                                    className="form-control"
                                    id="content"
                                    name="content"
                                    rows="4" />

                                <label htmlFor="stars" className="form-check-label">Star Rating</label>
                                <input 
                                    className="form-control" 
                                    id="stars"
                                    name="stars"
                                    type="number"
                                    step=".5"
                                    max="5"
                                    min="0" />
                                
                                <br />
                                <div htmlFor="rant" className="form-check">
                                    <input
                                        className="form-check-input"
                                        id="rant"
                                        name="rant"
                                        type="checkbox" />
                                    <label htmlFor="rant" className="form-check-label">Rant?</label>
                                </div>
                            </div>
                            <br />
                            <input className="btn btn-primary" type="submit" value="Submit Your Review!" />
                        </form>
                    </div>   

                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} className="img-max" />
                    </div>
                </div>
            </main>
        </Default>
    )
}

module.exports = Comment
