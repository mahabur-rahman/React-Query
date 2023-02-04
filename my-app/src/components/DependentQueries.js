import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );

  const channelId = user?.data.channelId;

  const result = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  return (
    <>
      <div>
        <div>{user?.data?.id}</div>
        <div>{user?.data?.channelId}</div>
      </div>

      <br />

      <h1>Channel info</h1>
      <div>
        <div>{result?.data?.data?.id}</div>
        <div>
          {result?.data?.data?.courses?.map((course) => (
            <>
              <span key={course}>{course}</span>
              <br />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default DependentQueries;
