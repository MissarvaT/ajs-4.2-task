/* eslint-disable no-undef */
import findBy from '../searchWidget';

test('возвращает пустой массив', () => {
  const finder = findBy('name', 'эльф');
  const result = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ].filter(finder);

  expect(result).toStrictEqual([]);
});
