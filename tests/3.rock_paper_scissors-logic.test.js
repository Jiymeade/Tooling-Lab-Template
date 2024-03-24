const { RockPaperScissors } = require(`../resources/scripts/rock_paper_scissors.js`);

describe(`RockPaperScissors class`, function () {
  describe(`determineWinner()`, function () {
    test(`win cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `scissors`)).toBe(`win`);
      // Complete the test
    });

    test(`tie cases`, function () {
      // Write your test here
      const game =  new RockPaperScissors();
      expect(game.determineWinner(`rock`, `rock`)).toBe(`tie`);
      expect(game.determineWinner(`paper`, `paper`)).toBe(`tie`);
      expect(game.determineWinner(`scissors`, `scissors`)).toBe(`tie`);
    });

    test(`lost cases`, function () {
      // Write your test here
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `paper`)).toBe(`lose`);
      expect(game.determineWinner(`paper`, `scissors`)).toBe(`lose`);
      expect(game.determineWinner(`scissors`, `rock`)).toBe(`lose`);
    });
  });
});