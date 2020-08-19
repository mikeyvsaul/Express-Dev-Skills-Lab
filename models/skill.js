const skills = [
  {id: 987234, skill: 'Javascript', experienced: true},
  {id: 890489, skill: 'Python', experienced: false},
  {id: 183959, skill: 'React', experienced: false},
  {id: 489184, skill: 'Angular', experienced: false},
  {id: 293845, skill: 'Ruby', experienced: false}
];

module.exports = {
  getAll, 
  getOne,
  create,
  deleteOne
};

function getAll() {
  return skills;
}

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.experienced = false;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}