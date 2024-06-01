import useFetch from "../services/useFetch";

const UseFetch = () => {
  const { data, loading, error } = useFetch(process.env.REACT_APP_URL);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {data ? (
          <div style={{ width: "70%" }}>
            <h2 style={{ textAlign: "center" }}>Data from external system</h2>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>City</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default UseFetch;
