import Character from '../character.js';

test('Invalid name -> too short', () => {
    expect(
        () => new Character('O', 'Bowman', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid name -> too long', () => {
    expect(
        () => new Character('LooooooongName', 'Daemon', 100, 100),
    ).toThrow('Invalid name length');
});

test('Invalid character type', () => {
    expect(
        () => new Character('Bowy', 'FakeBowman', 100, 100),
    ).toThrow('Invalid character type');
});
