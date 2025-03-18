const getUsers = (req, res) => {
  res.json([{ name: "John Doe", email: "john@example.com" }]);
};

module.exports = { getUsers };