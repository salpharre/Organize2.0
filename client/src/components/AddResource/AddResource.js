import React from "react";

function AddResource() {
  return (
    <>
      <div className="card ">
        <div className="card-header text-center">
          I am an "AddResource" Component
          <h5 className="card-title">Add Article or Resource Title Here</h5>
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Title"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="Author"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="resource-body">Body</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="resource-description">Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
              ></textarea>
            </div>
            <div className="form-row">
              <div className="form-group col">
                <label for="source">Source(url)</label>
                <input type="text" className="form-control" id="source" />
              </div>
              <div className="form-row">
                <div className="form-group col">
                  <label for="type">Type/keyword(s)</label>
                  <input type="text" className="form-control" id="type" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="card-footer text-muted">
          When this is submitted we need to make sure a date is added to the db
          with the title 'date_added' so that it matches the schema
        </div>
      </div>
    </>
  );
}

export default AddResource;
