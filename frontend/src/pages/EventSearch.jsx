import { useState } from 'react';

function EventSearch() {
  const [searchParams, setSearchParams] = useState({
    startDate: '',
    endDate: '',
    keyword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement event search logic
    console.log('Searching events:', searchParams);
  };

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <h2>Search Events</h2>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="form-control"
              value={searchParams.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="form-control"
              value={searchParams.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="keyword">Keyword (Optional)</label>
            <input
              type="text"
              id="keyword"
              name="keyword"
              className="form-control"
              value={searchParams.keyword}
              onChange={handleChange}
              placeholder="Search by event name, venue, etc."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Search Events
          </button>
        </form>
      </div>

      {/* TODO: Add event results grid here */}
      <div className="grid">
        {/* Event cards will be rendered here */}
      </div>
    </div>
  );
}

export default EventSearch; 