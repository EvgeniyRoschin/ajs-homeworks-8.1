import Team from '../app';

test('Add', () => {
  const team = new Team();
  team.add('Vasya');
  expect(team.toArray()).toEqual(['Vasya']);
});

test('Too much Vasyas', () => {
  const team = new Team();
  team.add('Vasya');
  expect(() => team.add('Vasya')).toThrow('Такой игрок уже есть в команде');
});

test('Add all', () => {
  const team = new Team();
  team.addAll('Vasya', 'Petya', 'Igor', 'Petya', 'Vasya');
  expect(team.toArray()).toEqual(['Vasya', 'Petya', 'Igor']);
});
