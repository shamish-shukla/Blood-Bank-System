import Header from "../Top/Header";

function Search(){
    return(
        <div className="search-content">
            <Header />
            <h2>Need Blood</h2>
            <hr></hr>
            <form className="form-search">
                <div className="search-form-row">
                  <div>
                    <label>Blood Group*:</label><br></br>
                    <input type="text" placeholder="Enter the Blood Group" />
                  </div>
                  <div className="reason-text-area">
                    <label>Reason why do we need Blood?</label><br></br>
                    <input type="text" />
                  </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search;