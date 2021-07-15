import subject from '../client/reducers/jobApplicationsReducer';
// const subject = require('../client/reducers/marketsReducer');
/**
 * One of the main benefits of reducers is how testable they are. Since they're
 * pure (in theory), all we have to do is look at the inputs and outputs. We
 * can also add some tests to determine if the reducer really is pure!
 */
describe('JobApplications reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      jobApplications: []
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'whatever' };
      expect(subject(state, action)).toBe(state);
    });
  });

  describe('CREATE JOB APP', () => {
    const action = {
      type: 'ADD_JOB_APPLICATION',
      payload: {
        companyName: 'google-test',
        jobTitle: 'swe-test',
        salary: '10000000',
        postSource: 'linkedin',
        description: 'exciting',
        statusName: 'pending',
        notes: 'fun',
        statusDate: '2021-07-31',
        favorite: true,
      },
    };

    it('adds a new job app to the tracker', () => {
      const { jobApplications } = subject(state, action);
      expect(jobApplications[0]).toEqual({
        companyName: 'google-test',
        jobTitle: 'swe-test',
        salary: '10000000',
        postSource: 'linkedin',
        description: 'exciting',
        statusName: 'pending',
        notes: 'fun',
        statusDate: '2021-07-31',
        favorite: true,
      });
    });

    xit('increases total market count by 1', () => {
      // const { totalMarkets } = subject(state, action);
      // expect(totalMarkets).toEqual(1);
      const result = state.totalMarkets;
      const { totalMarkets } = subject(state, action);
      expect(totalMarkets).toEqual(result + 1);
    });

    // Remember that in Redux we never mutate. If something changes, we copy
    // the data structure! Hint: `.toBe` or `.not.toBe` are your questions.
    xit('returns a state object not strictly equal to the original', () => {
    });

    xit('includes a marketList not strictly equal to the original', () => {
    });

    xit('clears the newLocation field', () => {
    });
  });

  describe('EDIT_JOB_APPLICATION', () => {
    const action = {
      type: 'EDIT_JOB_APPLICATION',
      data: {
        companyName: 'google-test',
        jobTitle: 'swe-test',
        salary: '10000000',
        postSource: 'linkedin',
        description: 'exciting',
        statusName: 'pending',
        notes: 'fun',
        statusDate: '2021-07-31',
        favorite: true,
      }, 
      payload: {
	          salary: '10'
             },
    };
    
    it('update salary with the action payload', () => {
	const { jobApplications } = subject(state, action);
	expect(jobApplications[0].salary).toEqual('10');
    });

    xit('returns a state object not strictly equal to the original', () => {
    });

    xit('doesn\'t touch the marketList array', () => {
    });
  });
  /*
   * Note: the rest of these tests are an EXTENSION. You should move on
   * to Enzyme testing, and come back to these later. Optionally, you may
   * just do ADD_CARD now, and come back to the rest of these redux tests later.
   */
  xdescribe('ADD_CARD', () => {
    xit('increases card count of market specified by payload', () => {
    });

    xit('increases total card count by 1', () => {
    });

    xit('includes a marketList not strictly equal to the original', () => {
    });

    xit('does not mutate or duplicate other markets in marketList', () => {
    });
  });
  
  xdescribe('DELETE_CARD', () => {
    xit('decreases card count of market specified by payload', () => {
    });

    xit('decreases total card count by 1', () => {
    });

    xit('includes a marketList not strictly equal to the original', () => {
    });

    xit('does not mutate or duplicate other markets in marketList', () => {
    });
  });

  // The rest is functionality not included in the original MegaMarkets unit.
  // In short:
  //   1. SYNC_MARKETS is our action for writing markets to our "database." The
  //   only part of client state it affects is the "synced" property on
  //   markets, which activates/deactivates the button.
  //   2. LOAD_MARKETS only happens once, on page load, to load up markets from
  //   the database.
  xdescribe('SYNC_MARKETS', () => {
    xit('sets synced to true', () => {
    });
  });

  xdescribe('LOAD_MARKETS', () => {
    xit('replaces its marketList with the payload as-is', () => {
    });

    xit('sets the correct totalMarkets count', () => {
    });

    xit('sets the correct totalCards count', () => {
    });
  });
});
