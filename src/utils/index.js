export const fetchPosts = async (setPosts) => {
    const response = await fetch('http://localhost:5000/posts')
    const data = await response.json();
    setPosts(data);
  };

export const fetchUsers = async (setUsers) => {
    const response = await fetch('http://localhost:5000/users')
    const data = await response.json();
    setUsers(data);
};