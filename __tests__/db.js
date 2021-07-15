// Here we will be unit testing the 3 main database functions from server/db/markets.js
const fs = require('fs');
const path = require('path');
const db = require('../server/db/markets');

const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

/**
 * Like many testing frameworks, in Jest we use the "describe" function to
 * separate our tests into sections. They make your test outputs readable.
 *
 * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
 * functions inside of "describe" blocks and they will only run for tests
 * inside that describe block. You can even nest describes within describes!
 */
xdescribe('db unit tests', () => {
  /**
   * Jest runs the "beforeAll" function once, before any tests are executed.
   * Here, we write to the file and then reset our database model. Then, we
   * invoke the "done" callback to tell Jest our async operations have
   * completed. This way, the tests won't start until the "database" has been
   * reset to an empty Array!
   */
  beforeAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), () => {
      db.reset();
      done();
    });
  });

  afterAll((done) => {
    fs.writeFile(testJsonFile, JSON.stringify([]), done);
  });

  xdescribe('#sync', () => {
    it('writes a valid marketList to the JSON file', () => {
      const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      const result = db.sync(marketList);
      expect(result).not.toBeInstanceOf(Error);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      expect(table).toEqual(marketList);
    });

    // TODO: Finish unit testing the sync function
    it('overwrites previously existing markets', () => {
      const marketList = [{ location: 'where', cards: 100 }];
      const result = db.sync(marketList);
      expect(result).not.toBeInstanceOf(Error);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      expect(table).toEqual(marketList);
    });
    
    it('returns an error when location and/or cards fields are not provided', () => {
      const marketList = [{ location: undefined, cards: undefined }, { location: undefined, cards: 1 }, { location: 'place', cards: undefined }];
      const result = db.sync(marketList);
      expect(result).toBeInstanceOf(Error);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      expect(table).not.toEqual(marketList);
    });

    /**
     *  TODO: Type validation is not yet correctly implemented! Follow the TDD
     *  (test driven development) approach:
     *    1. Write a test describing the desired feature (db.sync returns a
     *      TypeError when the types are wrong)
     *    2. Confirm that your tests fail
     *    3. Follow the errors to implement your new functionality
     */
    it('returns an error when location value is not a string', () => {
      const marketList = [{ location: 3, cards: 11 }];
      const result = db.sync(marketList);
      // console.log('1st test case result: ', result);
      // type error;
      expect(result).toBeInstanceOf(TypeError);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      // console.log('1st test case table: ', table);
      expect(table).not.toEqual(marketList);
    });

    it('returns an error when cards value is not a number', () => {
      const marketList = [{ location: 'hello', cards: 'hello' }];
      const result = db.sync(marketList);
      // console.log('1st test case result: ', result);
      expect(result).toBeInstanceOf(TypeError);
      const table = JSON.parse(fs.readFileSync(testJsonFile));
      // console.log('1st test case table: ', table);
      expect(table).not.toEqual(marketList);
    });
  });

  // Extension TODO: Unit test the #find and #drop functions
  xdescribe('#find', () => {
    it('returns list of all markets from the json file', () => {
      const result = JSON.parse(fs.readFileSync(testJsonFile));
      // console.log('result: ', result);
      // console.log('db.find: ', db.find());
      expect(result).not.toBeInstanceOf(Error);
      expect(db.find()).toEqual(result);
    });

    xit('works if the list of markets is empty', () => {
    });
  });

  xdescribe('#drop', () => {
    it('writes an empty array to the json file', () => {
      const result = JSON.parse(fs.readFileSync(testJsonFile));
      expect(result).not.toEqual(db.drop());
      expect(db.drop()).not.toBeInstanceOf(Error);
      console.log(db.drop());
      expect(db.drop()).toEqual(undefined);
    });
  });
});
