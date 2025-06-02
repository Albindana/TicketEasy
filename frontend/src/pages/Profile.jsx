function Profile() {
  // TODO: Implement user profile data fetching
  const mockUserData = {
    name: 'John Doe',
    email: 'john@example.com',
    upcomingEvents: [
      { id: 1, name: 'Concert in the Park', date: '2024-07-15' },
      { id: 2, name: 'Theater Show', date: '2024-07-20' }
    ]
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Profile</h2>
        <div className="profile-info">
          <p><strong>Name:</strong> {mockUserData.name}</p>
          <p><strong>Email:</strong> {mockUserData.email}</p>
        </div>
      </div>

      <div className="card">
        <h3>Upcoming Events</h3>
        <div className="grid">
          {mockUserData.upcomingEvents.map(event => (
            <div key={event.id} className="card">
              <h4>{event.name}</h4>
              <p>Date: {event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile; 