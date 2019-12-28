import Team from '../app';
import Character from '../character';

test('Add', () => {
  const team = new Team();
  const vasya = new Character('Vasya');
  team.add(vasya);
  expect(team.toArray()).toEqual([{ name: 'Vasya' }]);
});

test('Too much Vasyas', () => {
  const team = new Team();
  const vasya = new Character('Vasya');
  team.add(vasya);
  expect(() => team.add(vasya)).toThrow('Такой игрок уже есть в команде');
});

test('Add all', () => {
  const team = new Team();
  const vasya = new Character('Vasya');
  const petya = new Character('Petya');
  const igor = new Character('Igor');
  team.addAll(vasya, petya, igor, petya, vasya);
  expect(team.toArray()).toEqual([{ name: 'Vasya' }, { name: 'Petya' }, { name: 'Igor' }]);
});
