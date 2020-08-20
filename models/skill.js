const skills = [
  {id: 987234, skill: 'Javascript', learned: true},
  {id: 293845, skill: 'HTML', learned: true},
  {id: 489184, skill: 'CSS', learned: true},
  {id: 890489, skill: 'Python', learned: false},
  {id: 183959, skill: 'React', learned: false}
];

module.exports = {
  getAll, 
  getOne,
  create,
  deleteOne,
  update
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
  skill.learned = false;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex(skill => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

function update(id, updatedSkill) {
  const skill = skills.find(skill => skill.id === parseInt(id));
  Object.assign(skill, updatedSkill);
}