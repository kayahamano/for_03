const participants = [
  { name: 'tanaka', age: 15 },
  { name: 'suzuki', age: 20 },
  { name: 'sato', age: 30 },
];

for (let i = 0; i < participants.length; i++) {
  const person = participants[i];
  const p = document.createElement('p');

  if (person.age >= 18) {
    p.textContent = `${person.name} さんは18歳以上のため参加可能です`;
  } else {
    p.textContent = `${person.name} さんは18歳未満のため参加できません`;
  }

  document.body.appendChild(p);
}
